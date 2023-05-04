const mongoose = require('mongoose');
const connection = require('../config/connection.js');
const { User, Thought } = require('../models');

async function start() {

connection.once('open', async() => {
	await User.deleteMany({});
	const totalUsers = 5;
	for (let i = 0; i < totalUsers; i++) {
        User.create({ username: `user${i}`, email: `user${i}@test.com` });
	}
});

connection.once('open', async() => {
	await Thought.deleteMany({});
	const totalThoughts = 5;
	for (let i = 0; i < totalThoughts; i++) {
		Thought.create({ thoughtText: `thought${i}`, username: `thoughtUser${i}`});
	}
})
}

start();
