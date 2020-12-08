import UserController from './userController';
import Service from '../../database/acid/services/index';
import Token from '../../core/utils/tokens';
import Password from '../../core/utils/password';
import Responses from '../helpers/responses';
import notifier from '../helpers/notifier';

const User = new UserController(Password, Token, Responses, Service, notifier);

const Controller = {
  User,
};

export default Controller;
