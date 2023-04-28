const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			minLength: 1,
			maxLength: 280,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			createdAt: {
				type: Date,
				default: Date.now,
				get: function (timestamp) {
					return new Date(timestamp).toLocaleDateString('en-US', {
						weekday: 'long',
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					});
				},
			},
		},
		username: {
			type: String,
			required: true,
		},
		reactions: [reactionSchema],
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

thoughtSchema.virtual('reactionCount').get(function () {
	return this.reactions.length;
});

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
