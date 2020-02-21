require('dotenv').config();
const express = require('express'),
	morgan = require('morgan'),
	fs = require('fs'),
	path = require('path'),
	rfs = require('rotating-file-stream'),
	cors = require('cors'),
	db = require('./db'),
	appRoutes = require('./router');

const app = express();

app.use('/api/v1', appRoutes);
app.use(cors());

// create a write stream (in append mode)
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'logFile/access.log'), { flags: 'a' })
var logDirectory = path.join(__dirname, 'logFile');

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
	interval: '1d', // rotate daily
	path: logDirectory
});

// create "middleware"
app.use(morgan('combined', { stream: accessLogStream }));

// Listen for process stop signals and close the mongo db connection.
// when we press ctrl + c to stop server then mongoose also close the connection.
process.on('SIGINT', () => {
	db.close(() => {
		console.log('Mongoose defalt connection is disconnected.');
	});
	server.close();
});

app.use( (req, res, next) => {
	const err = new Error('Not found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.status = (err.status || 500);
	res.send({
		error: {
			status : err.status || 500,
			message: err.message
		}
	});
});

var server = app.listen(process.env.PORT, () => {
	console.log(`Server started on port:  ${process.env.PORT} `);
});

module.exports = app;