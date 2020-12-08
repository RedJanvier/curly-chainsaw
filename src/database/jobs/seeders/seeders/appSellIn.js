const data = require('../feeds/feed.appSellIn');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('app_sells_in', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('app_sells_in', null, {});
  },
};
