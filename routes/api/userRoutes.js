const router = require('express').Router();
const {
	getUsers,
	getSingleUser,
	createUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);
router.route('/').post(createUser);
//router.route('/:userId').put(updateSingleUser);

module.exports = router;
