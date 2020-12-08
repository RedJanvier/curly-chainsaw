const data = require('../feeds/feed.genre');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('genre', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('genre', null, {});
  },
};
