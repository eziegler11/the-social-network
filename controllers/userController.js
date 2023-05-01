const { User, Thought } = require('../models');

module.exports = {
	// Get All Users
	async getUsers(req, res) {
		try {
			const users = await User.find();
			res.json(users);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// Get A Single User
	async getSingleUser(req, res) {
		try {
			const users = await User.findOne({ _id: req.params.userId })
				.populate({ path: 'thoughts', select: '-_v' })
				.populate({ path: 'friends', select: '-_v' });

			if (!users) {
				return res.status(404).json({ message: 'No user with that ID' });
			}

			res.json(users);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// Create A Single User
	async createUser(req, res) {
		try {
			const users = User.create({
				username: req.body.username,
				email: req.body.email,
			});
			res.json(users);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// Update A Single User
	async updateUser(req, res) {
		try {
			const users = await User.findOneAndUpdate(
				{ _id: req.params.userId },
				{ $set: { username: req.body.username, email: req.body.email } },
				{ runValidators: true, new: true }
			);

			// if (!users) {
			// 	return res.status(404).json({ message: 'No user with that ID' });
			// }

			res.json(users);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// Delete A Single User
	async deleteUser(req, res) {
		try {
			const users = await User.findOneAndDelete({ _id: req.params.userId });

			// if (!users) {
			// 	return res.status(404).json({ message: 'No user with that ID' });
			// }

			res.json(users);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
