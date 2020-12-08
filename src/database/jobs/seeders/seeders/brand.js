const data = require('../feeds/feed.brand');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('brand', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('brand', null, {});
  },
};
