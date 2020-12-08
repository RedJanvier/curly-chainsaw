const data = require('../feeds/feed.country');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('country', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('country', null, {});
  },
};
