const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    title: 'Admin',
    service_role: '1',
    createdAt,
    updatedAt,
  },
  {
    title: 'It',
    service_role: '2',
    createdAt,
    updatedAt,
  },
  {
    title: 'Contact Us',
    service_role: '3',
    createdAt,
    updatedAt,
  },
  {
    title: 'About Us',
    service_role: '4',
    createdAt,
    updatedAt,
  },
  {
    title: 'Activate ChatBot',
    service_role: '5',
    createdAt,
    updatedAt,
  },
  {
    title: 'Contact Owner',
    service_role: '6',
    createdAt,
    updatedAt,
  },
];
