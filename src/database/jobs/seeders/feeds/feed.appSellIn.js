const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    title: 'Retailer',
    description: 'someone who sells directly to consumer',
    createdAt,
    updatedAt,
  },
  {
    title: 'Wholesailer',
    description: 'someone who sells goods in wholesale',
    createdAt,
    updatedAt,
  },
  {
    title: 'Manufacturer',
    description: 'someone who makes good',
    createdAt,
    updatedAt,
  },
];
