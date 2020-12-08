const data = require('../feeds/feed.sysUser');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('sys_users', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('sys_users', null, {});
  },
};
