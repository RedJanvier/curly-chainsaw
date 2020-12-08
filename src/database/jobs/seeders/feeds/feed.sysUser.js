const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    username: 'Default user',
    email: ' admin@onduka.com',
    createdAt,
    updatedAt,
  },
  {
    username: 'Sagesse',
    email: 'magezi.sagesse@justicebot.org',
    position: 1,
    employee_permissions: '1,2,3,4',
    createdAt,
    updatedAt,
  },
  {
    username: 'Chadrack',
    email: 'cruhara@justicechatbot.org',
    position: 2,
    employee_permissions: '1,2,3,4,5',
    createdAt,
    updatedAt,
  },
  {
    username: 'Hope',
    email: 'tmarkos@justicebot.org',
    employee_permissions: '3,4',
    position: 3,
    createdAt,
    updatedAt,
  },
  {
    username: 'Jonan',
    email: 'jkatenge@justicebot.org',
    employee_permissions: '2,3',
    position: 4,
    createdAt,
    updatedAt,
  },
  {
    username: 'Verdotte',
    email: 'uverdotte@justicechatbot.org',
    employee_permissions: '2,5',
    position: 7,
    createdAt,
    updatedAt,
  },
];
