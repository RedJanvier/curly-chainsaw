const data = require('../feeds/order/feed.productOrder');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('product_order', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('product_order', null, {});
  },
};
