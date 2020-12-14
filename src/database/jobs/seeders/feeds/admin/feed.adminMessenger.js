const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    role: 1,
    third_id: '100007238792868',
    app_third: '101112558427680',
    otc: '423100',
    third_user: '2875653269328400',
    createdAt,
    updatedAt,
  },
];
