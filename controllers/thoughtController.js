const { User, Thought } = require('../models');

module.exports = {
	// Get All Thoughts
	async getThoughts(req, res) {
		try {
			const thoughts = await Thought.find();
			res.json(thoughts);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	// Get A Single Thought
	async getSingleThought(req, res) {
		try {
			const thoughts = await Thought.findOne({ _id: req.params.thoughtId });

			if (!thoughts) {
				return res.status(404).json({ message: 'No thought with that ID' });
			}

			res.json(thoughts);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	// Create A Thought
	async createThought(req, res) {
		try {
			const thoughts = await Thought.create(req.body);
			const user = await User.findOneAndUpdate(
				{ _id: req.body.userId },
				{ $push: { thoughts: thoughts._id } },
				{ new: true }
			);

			if (!user) {
				return res
					.status(404)
					.json({ message: 'Thought created, but no users with this ID' });
			}

			res.json({ message: 'Thought created' });
		} catch (err) {
			console.error(err);
		}
	},
	// Update Thought
	async updateThought(req, res) {
		try {
			const thoughts = await Thought.findOneAndUpdate(
				{ _id: req.params.thoughtId },
				{ $set: { thoughtText: req.body.thoughtText } }
			);

			if (!thoughts) {
				return res.status(404).json({ message: 'No thought with this ID!' });
			}

			res.json(thoughts);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	// Delete Thought
	async deleteThought(req, res) {
		try {
			const thoughts = await Thought.findOneAndRemove({
				_id: req.params.thoughtId,
			});

			if (!thoughts) {
				return res.status(404).json({ message: 'No thought with this ID!' });
			}

			res.json({ message: 'Thought successfully deleted!' });
		} catch (err) {
			res.status(500).json(err);
		}
	},
	// Add Reaction
	async createReaction(req, res) {
		try {
			const reaction = await Thought.findOneAndUpdate(
				{ _id: req.params.thoughtId },
				{ $push: { reactions: { reactionBody: req.body.reactionBody } } },
				{ new: true }
			);

			if (!reaction) {
				return res.status(404).json({ message: 'No thought with this ID!' });
			}

			res.json(reaction);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	// Remove Reaction
	async deleteReaction(req, res) {
		try {
			const reaction = await Thought.findOneAndUpdate(
				{ _id: req.params.thoughtId },
				{ $pull: { reactions: { reactionId: req.body.reactionId } } },
				{ new: true }
			);

			if (!reaction) {
				return res.status(404).json({ message: 'No reaction with this ID!' });
			}

			res.json(reaction);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
