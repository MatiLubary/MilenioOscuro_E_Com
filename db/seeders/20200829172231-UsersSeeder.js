'use strict';

const faker = require('faker')
const bcrypt = require('bcrypt')





module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */ 

      let users = []

      for (let i = 0; i < 10; i++) {
        users.push ({
          email: faker.internet.email(),
          password: bcrypt.hashSync('secret123', 10),
          username: faker.name.firstName(),
          avatar: 'superman_icono.jpg'
        })
      } 

      return queryInterface.bulkInsert('users', users, {})
     
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('users', null, {})
  }
};
