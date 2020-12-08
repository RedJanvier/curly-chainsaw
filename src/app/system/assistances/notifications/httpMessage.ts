import Notification from '../../../../core/interfaces/notifications';

class HttpMessage implements Notification {
  created = (): string | number => 'User registered successfully';
  exist = (): string | number => 'User already registered';
  unauthorized = (): string | number => 'Unauthorized access';
  ok = (): string | number => 'Success';
  incorrect = (): string => 'The credentials you provided are incorrect';
  already = (): string => 'Already exist';
  restrict = (): string => 'Please signup and register your page before signin';
}

export default HttpMessage;
