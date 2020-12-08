const data = require('../feeds/admin/feed.adminMessenger');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('admin_messenger', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('admin_messenger', null, {});
  },
};
