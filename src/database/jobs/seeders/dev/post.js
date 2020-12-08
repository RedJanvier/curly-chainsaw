const data = require('../feeds/post/feed.post');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('posts', data, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('posts', null, {});
  },
};
