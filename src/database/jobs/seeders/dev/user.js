const data = require('../feeds/user/feed.user');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('users', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
