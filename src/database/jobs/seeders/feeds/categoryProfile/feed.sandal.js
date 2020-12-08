const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    category: 12,
    sub_category: 2,
    category_title: 'sport sandals',
    createdAt,
    updatedAt,
  },
  {
    category: 13,
    sub_category: 2,
    category_title: 'causal sandals',
    createdAt,
    updatedAt,
  },
  {
    category: 14,
    sub_category: 2,
    category_title: 'class sandals',
    createdAt,
    updatedAt,
  },
  {
    category: 15,
    sub_category: 2,
    category_title: 'everyday flat',
    createdAt,
    updatedAt,
  },
  {
    category: 16,
    sub_category: 2,
    category_title: 'flip flops',
    createdAt,
    updatedAt,
  },
];
