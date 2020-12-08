const data = require('../feeds/order/feed.order');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('order', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('order', null, {});
  },
};
