const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    title: 'Basic Package',
    description: 'the basic package',
    package_type: 'store',
    unlimited: 0,
    createdAt,
    updatedAt,
  },
  {
    title: 'Standard Account',
    description: 'Good for Personal, Businesses & Developers',
    package_type: 'account',
    unlimited: 1,
    createdAt,
    updatedAt,
  },
  {
    title: 'Reseller Account',
    description: 'Good for a Digital Marketer or Website Builder',
    package_type: 'account',
    unlimited: 0,
    createdAt,
    updatedAt,
  },
];
