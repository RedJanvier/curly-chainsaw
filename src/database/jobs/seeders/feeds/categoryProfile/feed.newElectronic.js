const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    category: 67,
    sub_category: 5,
    category_title: 'Television and Video',
    createdAt,
    updatedAt,
  },
  {
    category: 68,
    sub_category: 5,
    category_title: 'Home Audio & Audio',
    createdAt,
    updatedAt,
  },
  {
    category: 69,
    sub_category: 5,
    category_title: 'Camera & Photos',
    createdAt,
    updatedAt,
  },
  {
    category: 70,
    sub_category: 5,
    category_title: 'Home Appliance',
    createdAt,
    updatedAt,
  },
  {
    category: 71,
    sub_category: 5,
    category_title: 'Car and Vehicles Appliance',
    createdAt,
    updatedAt,
  },
  {
    category: 72,
    sub_category: 5,
    category_title: 'Accessories & Others',
    createdAt,
    updatedAt,
  },
];
