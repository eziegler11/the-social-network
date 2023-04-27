const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
	reactionId: [
		{
			type: Schema.Types.ObjectId,
			default: true, // needs to be new objectId
		},
	],
	reactionBody: {
		type: String,
		required: true,
        maxLength: 280,
	},
	username: {
		type: String,
		required: true,
	},
	createdAt: {
        type: Date,
        default: Date.now,
	},
});

// Need a Getter method to format timestamp

// Initialize Thought model
const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
