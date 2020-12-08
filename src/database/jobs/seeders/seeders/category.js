const data = require('../feeds/feed.category');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('category', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('category', null, {});
  },
};
