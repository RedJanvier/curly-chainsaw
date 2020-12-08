const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    app_third: '109875770677564',
    app_owner: 1,
    transaction_id: '23567124',
    package: 1,
    status: 1,
    network: 2,
    validity: 5,
    unit: 2,
    currency: 'RWF',
    phone_number: '25075989758',
    payment_mode: 1,
    expiry_date: moment('2025-11-15T01:02:33.000Z').format(
      'YYYY-MM-DD HH:mm:ss',
    ),
    createdAt,
    updatedAt,
  },
];
