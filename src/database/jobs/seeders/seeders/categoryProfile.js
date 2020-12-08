const data = require('../feeds/categoryProfile');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('category_profile', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('category_profile', null, {});
  },
};
