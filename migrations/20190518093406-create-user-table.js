'use strict';

//migrations just create table in the database with the table name and the schema provided

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      firstname: Sequelize.STRING(20),
      lastname: Sequelize.STRING(20),
      age: Sequelize.INTEGER(100),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
      
     })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users')
  }
};
