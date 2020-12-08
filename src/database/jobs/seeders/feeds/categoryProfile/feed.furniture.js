const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    category: 45,
    category_title: 'Furniture',
    createdAt,
    updatedAt,
  },
  {
    category: 46,
    category_title: 'Health & Beauty',
    createdAt,
    updatedAt,
  },
  {
    category: 47,
    category_title: 'Grocery',
    createdAt,
    updatedAt,
  },
  {
    category: 48,
    sub_category: 45,
    category_title: 'Living room furniture',
    createdAt,
    updatedAt,
  },
  {
    category: 49,
    sub_category: 45,
    category_title: 'Dining room furniture',
    createdAt,
    updatedAt,
  },
  {
    category: 50,
    sub_category: 45,
    category_title: 'Bed furniture',
    createdAt,
    updatedAt,
  },
  {
    category: 51,
    sub_category: 45,
    category_title: 'Office furniture',
    createdAt,
    updatedAt,
  },
  {
    category: 52,
    sub_category: 45,
    category_title: 'Bath room furniture',
    createdAt,
    updatedAt,
  },
  {
    category: 53,
    sub_category: 45,
    category_title: 'Kid furniture',
    createdAt,
    updatedAt,
  },
  {
    category: 54,
    sub_category: 45,
    category_title: 'Entertainment furniture',
    createdAt,
    updatedAt,
  },
  {
    category: 55,
    sub_category: 45,
    category_title: 'Other furniture',
    createdAt,
    updatedAt,
  },
];
