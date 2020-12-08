import Notification from '../../../../core/interfaces/notifications';

class HttpCode implements Notification {
  ok = (): string | number => 200;
  created = (): string | number => 201;
  exist = (): string | number => 409;
  unauthorized = (): string | number => 401;
  badRequest = (): number => 400;
  accessDenied = (): number => 403;
  notFound = (): number => 404;
  serverError = (): number => 500;
  methodNotAllowed = (): number => 500;
}

export default HttpCode;
