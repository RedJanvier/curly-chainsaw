import Authentication from './authentication';
import Service from '../../../database/acid/services';
import Utils from '../utils';
import Assistance from '../assistances';

const { Notification, Responses } = Assistance;
const Verify = new Authentication(Utils, Notification, Service, Responses);

const Auth = {
  Verify,
};

export default Auth;
