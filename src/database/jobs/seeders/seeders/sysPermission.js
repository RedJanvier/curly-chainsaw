const data = require('../feeds/feed.sysPermission');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('sys_permissions', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('sys_permissions', null, {});
  },
};
