const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    first_name: 'Verdotte',
    last_name: 'Ignoto',
    user: 1,
    createdAt,
    updatedAt,
  },
  {
    first_name: 'Eliezer',
    last_name: 'Basubi',
    user: 2,
    createdAt,
    updatedAt,
  },
];
