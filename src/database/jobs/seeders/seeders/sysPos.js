const data = require('../feeds/feed.sysPos');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('sys_pos', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('sys_pos', null, {});
  },
};
