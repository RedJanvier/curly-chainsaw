const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    title: 'One virtual Salesperson',
    package: 1,
    createdAt,
    updatedAt,
  },
  {
    title: 'One language support',
    package: 1,
    createdAt,
    updatedAt,
  },
  {
    title: 'Unlimited number of posts',
    package: 1,
    createdAt,
    updatedAt,
  },
  {
    title: 'New arrival, Flash Sale and Discount notifications',
    package: 1,
    createdAt,
    updatedAt,
  },
  {
    title: 'Reach specific customers with your products',
    package: 1,
    createdAt,
    updatedAt,
  },
];
