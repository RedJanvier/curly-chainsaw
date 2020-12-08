const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    createdAt,
    updatedAt,
  },
  {
    createdAt,
    updatedAt,
  },
];
