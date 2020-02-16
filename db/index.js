var mongoose = require('mongoose');
	

// make a connection
mongoose.connect(
	`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017/horizontal?authSource=admin`,
	{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

// get reference to database
var db = mongoose.connection;

// autoIncrement.initialize(db);

db.on('error', err => {
	console.log('connection error! ' + err);
});

db.once('open', () => {
	console.log('Connection Successful!');
});

module.exports = db;
