const moment = require('moment');

const createdAt = moment().format();
const updatedAt = createdAt;

module.exports = [
  {
    app_user: '0',
    type: 0,
    about_user_type: 'Unknown user type',
    created_at: createdAt,
    updated_at: updatedAt,
    type_status: 1,
  },
  {
    app_user: '0',
    type: 1,
    about_user_type: 'Messenger user type',
    created_at: createdAt,
    updated_at: updatedAt,
    type_status: 1,
  },
  {
    app_user: '0',
    type: 2,
    about_user_type: 'User from fb page',
    created_at: createdAt,
    updated_at: updatedAt,
    type_status: 1,
  },
  {
    app_user: '0',
    type: 3,
    about_user_type: 'User from fb group',
    created_at: createdAt,
    updated_at: updatedAt,
    type_status: 1,
  },
];
