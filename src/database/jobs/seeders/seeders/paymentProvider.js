const data = require('../feeds/payment/feed.paymentProvider');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('payment_providers', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('payment_providers', null, {});
  },
};
