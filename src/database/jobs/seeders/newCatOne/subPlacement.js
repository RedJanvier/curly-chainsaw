const data = require('../feeds/feed.subPlacement');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('sub_placements', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('sub_placements', null, {});
  },
};
