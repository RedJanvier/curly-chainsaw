import Authentication from './authentication';
import Service from '../../../database/acid/services';
import Utils from '../utils';
import Assistance from '../assistances';
import Passport from '../../../core/plugins/OAuth/facebook/passport';

const { Notification, Responses } = Assistance;
const Verify = new Authentication(Utils, Notification, Service, Responses);

const Auth = {
  Verify,
  Passport,
};

export default Auth;
