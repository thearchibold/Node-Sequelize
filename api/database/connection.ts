const Sequelize = require('sequelize');

//create a new sequelize instance with all the database parameters

const sequelize = new Sequelize('sequelize', 'root', '', {
	host: '127.0.0.1',
	dialect: 'mysql',
	operatorAliases: false
});

//export @sequelize object

module.exports = sequelize;
global.sequelize = sequelize;
