// use strict - enforce secure coding practices
'use strict';

		const express = require("express"),
		bodyParser = require("body-parser"),
		controllers = require("../controller"),
		router = express.Router();

// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false });

		router.get('/', (req, res) => controllers.home(req, res));

		router.post('/userRegistration', urlencodedParser, (req, res) =>
			controllers.userRegistration(req, res)
		);

		router.post('/forgetPassword', urlencodedParser, (req, res) =>
			controllers.forgetPassword(req, res)
		);

		module.exports = router;
