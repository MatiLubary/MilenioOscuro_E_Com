'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable('carts_products',{
     
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey : true
      },
      qty: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false
      },
      offer: {
        type: Sequelize.STRING(45)
      },
      cart_id: {
        type: Sequelize.DataTypes.BIGINT.UNSIGNED,
        references: {
          model: 'carts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        allowNull: false,
      },

      product_id: {
        type: Sequelize.DataTypes.BIGINT.UNSIGNED,
        references: {
          model: 'products',
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
   return queryInterface.dropTable('carts_products');
  }
};
