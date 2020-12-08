const moment = require('moment');

const createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
const updatedAt = createdAt;

module.exports = [
  {
    title: 'CEO',
    description: 'Chief Executive Officer',
    createdAt,
    updatedAt,
  },
  {
    title: 'CTO',
    description: 'Chief Technical Officer',
    createdAt,
    updatedAt,
  },
  {
    title: 'PROJECT MANAGER',
    description: 'Manager of project',
    createdAt,
    updatedAt,
  },
  {
    title: 'MARKETING',
    description: 'Marketing Agent',
    createdAt,
    updatedAt,
  },
  {
    title: 'FINANCE',
    description: 'Chief Finance Officer',
    createdAt,
    updatedAt,
  },
  {
    title: 'IT',
    description: 'Information Technology Agent',
    createdAt,
    updatedAt,
  },
  {
    title: 'ENGINEER',
    description: 'Software Engineer',
    createdAt,
    updatedAt,
  },
];
