'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */


    return queryInterface.createTable('users', { 

      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,

        primaryKey : true
      }, 

      email : {
        type : Sequelize.STRING,
        allowNull: false
      },

      password : {
        type : Sequelize.STRING,
        allowNull: false
      },

      username : {
        type : Sequelize.STRING(32),
        allowNull: false
      },

      avatar : {
        type : Sequelize.CHAR(100).BINARY,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    })


  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

   return queryInterface.dropTable('users');

  }
};
