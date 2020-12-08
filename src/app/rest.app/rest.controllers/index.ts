import UserController from './rc.user';
import Sys from '../../system/index';

const {
  Utils,
  Service,
} = Sys;
const { Notification, Responses } = Sys.Assistance;

const User = new UserController(
  Service,
  Utils,
  Responses,
  Notification,
);


const Controller = {
  User,
  
};

export default Controller;
