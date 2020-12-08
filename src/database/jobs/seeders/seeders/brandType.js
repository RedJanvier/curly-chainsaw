const data = require('../feeds/feed.brandType');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('brand_type', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('brand_type', null, {});
  },
};
