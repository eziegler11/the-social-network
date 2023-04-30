// GIVEN a social network API
// WHEN I enter the command to invoke the application
    // Nodemon - npm watch - server.js

// THEN my server is started and the Mongoose models are synced to the MongoDB database
    // MODELS:
        // User - need schema
            // needs virtual called friendCount
        // Thought - need schema
            // needs virtual called reactionCount
            // Reaction - schema ONLY
                // reaction field's subdocument schema in the Thought model

// WHEN I open API GET routes in Insomnia for users and thoughts
    // GET /users
    // GET /thoughts

// THEN the data for each of these routes is displayed in a formatted JSON
    // res.JSON

// WHEN I test API POST, PUT, and DELETE routes in Insomnia
// THEN I am able to successfully create, update, and delete users and thoughts in my database
    // POST/create - /create-user
    // POST - /create-thought

    // PUT/update - /update-user
    // PUT - /update-thought

    // DELETE - /delete-user
    // DELETE - /delete-thought

// WHEN I test API POST and DELETE routes in Insomnia
// THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
    // POST/create - /create-reaction
    // POST - /add-friend

    // Delete - /delete-reaction
    // Delete - /delete-friend

const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}!`);
	});
});

