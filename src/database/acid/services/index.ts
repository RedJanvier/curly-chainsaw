import { Op } from 'sequelize';
import db from '../../definitions/models';

import UserServices from './userServices';
import UserAgentServices from './userAgentServices';

const User = new UserServices(db);
const UserAgent = new UserAgentServices(db);

const Service = {
  User,
  UserAgent,
};

export default Service;
