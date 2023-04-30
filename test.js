const connection = require('./config/connection.js');
connection.startSession();
const { User } = require('./models');

async function wrapped() {
    console.log(User)
    console.log(User.toString());
	//const users = await User.find();
	//console.log(users); // res.json
}

wrapped();
