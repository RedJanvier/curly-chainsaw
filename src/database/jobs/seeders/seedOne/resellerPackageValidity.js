const data = require('../feeds/payment/reseller/feed.packageValidity');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('package_validity', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('package_validity', null, {});
  },
};
