const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    category: 1,
    category_title: 'Shoes',
    createdAt,
    updatedAt,
  },
  {
    category: 2,
    category_title: 'Sandals',
    createdAt,
    updatedAt,
  },
  {
    category: 3,
    category_title: 'Clothes',
    createdAt,
    updatedAt,
  },
  {
    category: 4,
    category_title: 'Accessories',
    createdAt,
    updatedAt,
  },
  {
    category: 5,
    category_title: 'Electronic',
    createdAt,
    updatedAt,
  },
];
