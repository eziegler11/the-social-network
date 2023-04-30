const { User, Thought } = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const users = await User.findOne({_id: req.params.userId}).populate({path:"thoughts", select: "-_v"}).populate({path:"friends", select:"-_v"});
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
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
  }
}