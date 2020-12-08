const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    platform_id: '0',
    createdAt,
    updatedAt,
  },
  {
    platform_id: '1',
    createdAt,
    updatedAt,
  },
  {
    platform_id: '2',
    createdAt,
    updatedAt,
  },
  {
    platform_id: '3',
    createdAt,
    updatedAt,
  },
];
