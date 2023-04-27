const { Schema, model } = require('mongoose');


// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;