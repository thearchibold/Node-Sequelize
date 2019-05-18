const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//add user controller
const adduser = require('./api/controller/AddUser.ts');

//get users
const getusers = require('./api/controller/GetAllUser.ts');

//delete user
const deleteuser = require('./api/controller/DeleteUser.ts');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Sequelize database connection
require('./api/database/connection.ts');

app.use('/adduser/', adduser);
app.use('/getusers/', getusers);
app.use('/delete/', deleteuser);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
