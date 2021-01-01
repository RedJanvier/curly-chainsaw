import UserController from './rc.user';
import UserAgentController from './rc.user.agent';
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

const Controller = {
  User,
  UserAgent,
};

export default Controller;
