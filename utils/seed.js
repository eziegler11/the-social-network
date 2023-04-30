const mongoose = require('mongoose');
const connection = require('../config/connection.js');
const { User } = require('../models');

async function start() {

connection.once('open', async() => {
	await User.deleteMany({});
	const totalUsers = 5;
	for (let i = 0; i < totalUsers; i++) {
        User.create({ username: `user${i}`, email: `user${i}@test.com` });
	}
});
}

start();
