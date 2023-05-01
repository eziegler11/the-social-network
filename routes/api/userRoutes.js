const router = require('express').Router();
const {
	getUsers,
	getSingleUser,
	createUser,
	updateUser,
	deleteUser
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers);
router.route('/').post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);
router.route('/:userId').put(updateUser);
router.route('/:userId').delete(deleteUser);

module.exports = router;
