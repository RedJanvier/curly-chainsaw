const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    category: 6,
    sub_category: 1,
    category_title: 'plastic shoes',
    createdAt,
    updatedAt,
  },
  {
    category: 7,
    sub_category: 1,
    category_title: 'sport shoes',
    createdAt,
    updatedAt,
  },
  {
    category: 8,
    sub_category: 1,
    category_title: 'fromal shoes',
    createdAt,
    updatedAt,
  },
  {
    category: 9,
    sub_category: 1,
    category_title: 'causual shoes',
    createdAt,
    updatedAt,
  },
  {
    category: 10,
    sub_category: 1,
    category_title: 'boots',
    createdAt,
    updatedAt,
  },
  {
    category: 11,
    sub_category: 1,
    category_title: 'sneakers',
    createdAt,
    updatedAt,
  },
];
