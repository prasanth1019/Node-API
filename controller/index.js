// use strict - enforce secure coding practices
'use strict';

const bcrypt = require('bcrypt'),
	UserInfo = require('../models/user-model'),
	saltRounds = 10;

var controller = {
	home: (req, res) => {
		res.send('hello, world!');
	},

	userRegistration: (req, res) => {
		let currentDate = new Date().toISOString();
		bcrypt.hash(req.body.blb_password, saltRounds, function(err, hash) {
			// a document instance
			let userinfo = new UserInfo({
				blb_username: req.body.blb_username,
				blb_password: hash, // Store hash in your password DB.
				blb_original_password: hash, // Store hash in your password DB.
				blb_email: req.body.blb_email,
				blb_user_image: req.body.blb_user_image,
				blb_user_thumb_image: req.body.blb_user_thumb_image,
				blb_countries_id: req.body.blb_countries_id,
				blb_device_token: req.body.blb_device_token,
				blb_current_device_token: req.body.blb_current_device_token,
				islogin: req.body.islogin,
				blb_created_date: currentDate,
				blb_updated_date: currentDate,
				blb_user_status: req.body.blb_user_status,
				blb_emoji_signature: req.body.blb_emoji_signature,
				blb_device_type: req.body.blb_device_type,
				blb_device_version: req.body.blb_device_version,
				blb_app_version: req.body.blb_app_version
			});

			userinfo
				.save()
				.then(doc => {
					return res.status(201).json({message:'User successfully added!', doc});
				})
				.catch(error => {
					return res.status(400).json(error);
				});
		});
	},

	forgetPassword: (req, res) => {
		UserInfo.find({blb_email: req.body.blb_email}, (err, user) => {
			if(user.length == 0) {
				return res.send({ status: 0, message: 'No such user found!' });
			} else {
				return res.json({ message: 'User found successfully!', user });
			}
		});
	}
};

module.exports = controller;
