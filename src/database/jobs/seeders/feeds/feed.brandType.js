const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    title: 'Fashion',
    description: 'Fashion Brand',
    createdAt,
    updatedAt,
  },
  {
    title: 'Electronic',
    description: 'Electronic Brand',
    createdAt,
    updatedAt,
  },
  {
    title: 'Others',
    description: 'Other Brand',
    createdAt,
    updatedAt,
  },
];
