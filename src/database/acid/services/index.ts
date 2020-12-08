import { Op } from 'sequelize';
import db from '../../definitions/models';

import UserServices from './userServices';

const User = new UserServices(db);

const Service = {
  User,
};

export default Service;
