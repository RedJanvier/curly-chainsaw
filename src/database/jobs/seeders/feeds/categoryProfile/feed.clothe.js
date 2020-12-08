const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    category: 17,
    sub_category: 3,
    category_title: 'trousers and shorts',
    createdAt,
    updatedAt,
  },
  {
    category: 18,
    sub_category: 3,
    category_title: 'jackets',
    createdAt,
    updatedAt,
  },
  {
    category: 19,
    sub_category: 3,
    category_title: 'suits',
    createdAt,
    updatedAt,
  },
  {
    category: 20,
    sub_category: 3,
    category_title: 'underwear',
    createdAt,
    updatedAt,
  },
  {
    category: 21,
    sub_category: 3,
    category_title: 'causual clothes',
    createdAt,
    updatedAt,
  },
  {
    category: 22,
    sub_category: 3,
    category_title: 'sport clothes',
    createdAt,
    updatedAt,
  },
];
