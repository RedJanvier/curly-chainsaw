const data = require('../feeds/payment/feed.packageFeature');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('package_feature', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('package_feature', null, {});
  },
};
