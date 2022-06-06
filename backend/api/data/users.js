const User = require('../models/user');

async function getUsers() {
	return User.find({}).lean();
}

async function getUser(params) {
	const user = User.findOne({ email: params.email, password: params.password });

	return user;
}

module.exports = { getUsers, getUser };
