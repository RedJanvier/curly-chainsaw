const data = require('../feeds/feed.userTypes');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('user_types', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('user_types', null, {});
  },
};
