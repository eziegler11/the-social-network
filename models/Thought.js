const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: {
        // array of nested documents created with reactionSchema
    }
});

// Need virtual for reactionCount

// Need a Getter method to format timestamp

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;