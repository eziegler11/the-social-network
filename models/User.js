const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true,
		trimmed: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: function (v) {
				return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
			},
			message: (props) => `${props.value} is not a valid email address!`,
		},
	},
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
    // need to add virtual
});

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;