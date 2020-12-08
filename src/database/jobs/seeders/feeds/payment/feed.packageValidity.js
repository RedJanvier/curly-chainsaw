const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    package: 1,
    price_usd: 5,
    validity: 1,
    unit: 1,
    title: 'Short Bundle',
    description: 'One month bundle',
    createdAt,
    updatedAt,
  },
  {
    package: 1,
    price_usd: 25.99,
    validity: 6,
    unit: 1,
    title: 'Medium Bundle',
    description: 'Six months bundle',
    createdAt,
    updatedAt,
  },
  {
    package: 1,
    price_usd: 50,
    validity: 1,
    unit: 2,
    title: 'Large Bundle',
    description: 'One year bundle',
    createdAt,
    updatedAt,
  },
];
