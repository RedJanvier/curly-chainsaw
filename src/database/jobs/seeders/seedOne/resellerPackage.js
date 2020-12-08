const data = require('../feeds/payment/reseller/feed.package');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('packages', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('packages', null, {});
  },
};
