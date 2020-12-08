const data = require('../feeds/payment/feed.payment');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('payments', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('payments', null, {});
  },
};
