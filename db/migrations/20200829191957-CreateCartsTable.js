'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable('carts', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey : true
      },

      total : {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false
      },

      users_id: {
        type: Sequelize.DataTypes.BIGINT.UNSIGNED,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        allowNull: false,
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
    return queryInterface.dropTable('carts');
  }
};
