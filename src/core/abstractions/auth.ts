import { Request, Response, NextFunction } from 'express';
abstract class Auth {
  abstract async user(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void>;
  abstract async messengerUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void>;
  abstract async userEmail(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void>;
  abstract async messengerUserExist(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void>;
}

export default Auth;
