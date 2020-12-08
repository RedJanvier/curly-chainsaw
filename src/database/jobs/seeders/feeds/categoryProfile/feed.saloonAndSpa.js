const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    category: 64,
    sub_category: 46,
    category_status: 0,
    category_title: 'Salon',
    createdAt,
    updatedAt,
  },
  {
    category: 65,
    sub_category: 46,
    category_status: 0,
    category_title: 'Medical spa',
    createdAt,
    updatedAt,
  },
  {
    category: 66,
    sub_category: 46,
    category_title: 'Scar removal',
    createdAt,
    updatedAt,
  },
];
