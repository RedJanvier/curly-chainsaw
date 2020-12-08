const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    category: 73,
    category_title: 'Baby Products',
    createdAt,
    updatedAt,
  },
  {
    category: 74,
    sub_category: 73,
    category_title: 'Baby Essentials',
    createdAt,
    updatedAt,
  },
  {
    category: 75,
    sub_category: 73,
    category_title: 'Baby Apparel',
    createdAt,
    updatedAt,
  },
];
