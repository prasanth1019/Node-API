var mongoose = require('mongoose'),
	autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
	blb_user_id: { type: String },
	blb_username: { type: String, unique : true, required : true },
	blb_password: { type: String },
	blb_original_password: { type: String },
	blb_email: { type: String },
	blb_user_image: { type: String },
	blb_user_thumb_image: { type: String },
	blb_countries_id: { type: String },
	blb_device_token: { type: String },
	blb_current_device_token: { type: String },
	islogin: { type: String },
	blb_created_date: { type: String },
	blb_updated_date: { type: String },
	blb_user_status: { type: String },
	blb_emoji_signature: { type: String },
	blb_device_type: { type: String },
	blb_device_version: { type: String },
	blb_app_version: { type: String }
});

autoIncrement.initialize(mongoose.connection);

// compile schema to model
UserSchema.plugin(autoIncrement.plugin, {
	model: 'BlbUserInfo',
	field: 'blb_user_id',
	startAt: 277,
	incrementBy: 1
});
// compile schema to model
module.exports = mongoose.model('BlbUserInfo', UserSchema, 'blb_user_info');
