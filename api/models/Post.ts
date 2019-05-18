module.exports = Sequelize.define('Post', {
	id: {
		type: Sequelize.INTEGER(11),
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	comment: {
		type: Sequelize.STRING(300),
		allowNull: false
	},
	postedAt: Sequelize.DATE,
	userId: {
		type: Sequelize.INTEGER(11),
		foreignKey: true
	}
});
