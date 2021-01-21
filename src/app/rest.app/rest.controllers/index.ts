import UserController from './rc.user';
import UserAgentController from './rc.user.agent';
import DashboardController from './rc.dashboard';
import Sys from '../../system/index';

const { Utils, Service } = Sys;
const { Notification, Responses } = Sys.Assistance;

const User = new UserController(Service, Utils, Responses, Notification);
const UserAgent = new UserAgentController(
  Service,
  Utils,
  Responses,
  Notification,
);
const Dashboard = new DashboardController(
  Service,
  Utils,
  Responses,
  Notification,
);

const Controller = {
  User,
  UserAgent,
  Dashboard,
};

export default Controller;
