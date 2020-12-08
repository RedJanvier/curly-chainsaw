const data = require('../feeds/user/feed.userProfile');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('user_profile', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('user_profile', null, {});
  },
};
