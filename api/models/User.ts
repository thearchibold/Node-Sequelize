let Sequelize = require('sequelize');

let sequelize = require('../database/connection.ts');

module.exports = sequelize.define('Users', {
	id: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	firstname: Sequelize.STRING(20),
	lastname: Sequelize.STRING(20),
	age: Sequelize.INTEGER(100)
});
