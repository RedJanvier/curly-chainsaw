const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    title: 'Admin',
    role_type: 1,
    description: 'messenger app admin',
    createdAt,
    updatedAt,
  },
  {
    title: 'Manager',
    role_type: 1,
    description: 'messenger app manager',
    createdAt,
    updatedAt,
  },
  {
    title: 'Seller',
    role_type: 1,
    description: 'messenger app seller',
    createdAt,
    updatedAt,
  },
  {
    title: 'Dealer',
    role_type: 3,
    description: 'messenger app dealer',
    createdAt,
    updatedAt,
  },
];
