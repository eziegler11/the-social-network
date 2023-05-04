const router = require('express').Router();
const {
	getThoughts,
	getSingleThought,
	createThought,
	updateThought,
	deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts);
router.route('/').post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);
router.route('/:thoughtId').put(updateThought);
router.route('/:thoughtId').delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions').delete(deleteReaction);

module.exports = router;
