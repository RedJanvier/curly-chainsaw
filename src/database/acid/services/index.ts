import { Op } from 'sequelize';
import db from '../../definitions/models';

import UserServices from './userServices';
import UserAgentServices from './userAgentServices';
import ApplicationServices from './applicationServices';
import AppOwnerServices from './appOwnerService';
import AppOwnerProfileServices from './appOwnerProfileService';
import ProfilePlusServices from './profilePlusService';
import AppSubscriptionServices from './appSubscriptionService';
import ApplicationProfileServices from './applicationProfileService';
import AppDealInServices from './appDealInService';

const User = new UserServices(db);
const UserAgent = new UserAgentServices(db);
const Application = new ApplicationServices(db);
const AppOwner = new AppOwnerServices(db);
const AppOwnerProfile = new AppOwnerProfileServices(db);
const ProfilePlus = new ProfilePlusServices(db);
const AppSubscription = new AppSubscriptionServices(db);
const ApplicationProfile = new ApplicationProfileServices(db);
const AppDealIn = new AppDealInServices(db);

const Service = {
  User,
  UserAgent,
  Application,
  AppOwner,
  AppOwnerProfile,
  ProfilePlus,
  AppSubscription,
  ApplicationProfile,
  AppDealIn,
};

export default Service;
