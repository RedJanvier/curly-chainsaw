const data = require('../feeds/feed.placement');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('placements', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('placements', null, {});
  },
};
