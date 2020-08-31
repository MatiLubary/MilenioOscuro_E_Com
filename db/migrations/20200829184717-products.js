'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable('products', {

      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey : true
      },
      name: {
        type: Sequelize.STRING(45)
      },

      price: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(500)
      },
      image: {
        type: Sequelize.STRING(100)
      },
      imagetwo: {
        type: Sequelize.STRING(155)
      },
      category: {
        type: Sequelize.STRING(45)
      },
      offer: {
        type: Sequelize.STRING(45)
      },
      newprice: {
        type: Sequelize.INTEGER(10)
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

   return queryInterface.dropTable('products');
  }
};
