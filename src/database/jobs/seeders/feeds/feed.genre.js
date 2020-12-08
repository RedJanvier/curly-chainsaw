const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    title: 'men',
    description: 'men',
    createdAt,
    updatedAt,
  },
  {
    title: 'women',
    description: 'women',
    createdAt,
    updatedAt,
  },
  {
    title: 'kid',
    description: 'kid',
    createdAt,
    updatedAt,
  },
  {
    title: 'men & women',
    description: 'men & women',
    createdAt,
    updatedAt,
  },
];
