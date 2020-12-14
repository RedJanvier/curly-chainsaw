import { Request, Response, NextFunction } from 'express';
import Auth from '../../../core/abstractions/auth';

/**
 * Authentication
 * @extends Auth
 */
class Authentication extends Auth {
  /**
   * @constructor
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {any} Service
   * @param {any} Utils
   * @param {any} Responses
   * @param {any} Notification
   */
  constructor(
    private Utils: any,
    private Notification: any,
    private Service: any,
    private Responses: any,
  ) {
    super();
  }

  /**
   * User
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {*} req
   * @param {*} res
   * @returns {object} user payload
   * @memberof Authentication
   */
  user = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const token: any = this.Utils.Token.extract(req, res);
    if (!token) {
      return this.Responses.error(
        this.Notification.httpCode.unauthorized(),
        this.Notification.httpMessage.unauthorized(),
        res,
      );
    }

    const decoded = this.Utils.Token.decode(token);

    if (decoded.errors) {
      return this.Responses.error(
        this.Notification.httpCode.unauthorized(),
        this.Notification.httpMessage.unauthorized(),
        res,
      );
    }
    const { userid } = decoded.payload;
    const user = await this.Service.User.findByuserId(parseInt(userid));
    if (!user) {
      return this.Responses.error(
        this.Notification.httpCode.unauthorized(),
        this.Notification.httpMessage.unauthorized(),
        res,
      );
    }

    req['currentUser'] = user;
    next();
  };

  /**
   * Messenger User
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {*} req
   * @param {*} res
   * @returns {object} user payload
   * @memberof Authentication
   */
  messengerUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const payload = req['payload'];
    let response: any = '';
    const { thirdUser } = payload;
    const messengerBody = this.Utils.SnakeCase.toSnakeCase(payload);

    const messengerUser = await this.Service.User.findUserByMessengerID(
      payload.third_user,
    );

    if (messengerUser == null) {
      const profileBody = this.Utils.SnakeCase.toSnakeCase(req.body);
      response = await this.Service.User.saveMessengerUser(messengerBody, {
        profileBody,
      });
    }

    const { userid } = messengerUser != null ? messengerUser : response;

    payload['user'] = userid;

    payload.password = undefined;
    req['response'] = payload;
    next();
  };

  /**
   * UserEmail
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {*} req
   * @param {*} res
   * @returns {object} user payload
   * @memberof Authentication
   */
  userEmail = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const { email } = req.body;

    const emailExist = await this.Service.User.findByEmail(email);
    if (emailExist) {
      return this.Responses.error(
        this.Notification.httpCode.exist(),
        this.Notification.httpMessage.exist(),
        res,
      );
    }

    next();
  };

  /**
   * This method helps to verify token
   * @author Eliezer Basubi
   * @since Grest Framework
   *
   * @param { Object }
   * @returns {*} payload
   * @memberof Authentication
   */
  verified = (req: Request, res: Response, next: NextFunction) => {
    const token: any = this.Utils.Token.extract(req, res);
    if (!token) {
      return this.Responses.error(
        this.Notification.httpCode.unauthorized(),
        this.Notification.httpMessage.unauthorized(),
        res,
      );
    }

    const decoded = this.Utils.Token.decode(token);

    if (decoded.errors) {
      return this.Responses.error(
        this.Notification.httpCode.unauthorized(),
        this.Notification.httpMessage.unauthorized(),
        res,
      );
    }

    req['payload'] = decoded.payload;
    return next();
  };

  /**
   * App Checker
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {*} req
   * @param {*} res
   * @returns {object} user payload
   * @memberof Authentication
   */
  appChecker = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization = '' } = req.headers;
    const token: string = authorization.split(' ')[1];
    const { payload, errors } = this.Utils.Token.decode(token);

    if (errors) {
      return this.Responses.error(
        this.Notification.httpCode.unauthorized(),
        this.Notification.httpMessage.unauthorized(),
        res,
      );
    }

    const { appThird } = payload;

    const app: any = await this.Service.App.findOne(appThird);

    if (!app) {
      return this.Responses.error(
        this.Notification.httpCode.notFound(),
        'app not found',
        res,
      );
    }

    req['currentApp'] = {
      appThird: app.app_third,
      appAccessToken: app.app_access_token,
      app: app.app_id,
    };
    next();
  };

  /**
   * MessengerUserExist
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {*} req
   * @param {*} res
   * @returns {object} user payload
   * @memberof Authentication
   */
  messengerUserExist = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const token: any = this.Utils.Token.extract(req, res);
    if (!token) {
      return this.Responses.error(
        this.Notification.httpCode.unauthorized(),
        this.Notification.httpMessage.unauthorized(),
        res,
      );
    }

    const { errors, payload } = this.Utils.Token.decode(token);

    if (errors) {
      return this.Responses.error(
        this.Notification.httpCode.unauthorized(),
        this.Notification.httpMessage.unauthorized(),
        res,
      );
    }

    const { thirdUser, appThird, userType, firstName, lastName } = payload;
    const userExist = await this.Service.User.findUserByMessengerID(thirdUser);

    const profileBody = { first_name: firstName, last_name: lastName };

    if (!userExist) {
      await this.Service.User.saveMessengerUser(
        {
          third_user: thirdUser,
          app_third: appThird,
          user_type: userType,
        },
        {
          profileBody,
        },
      );
    }

    req['thirdUser'] = thirdUser;
    req['appThird'] = appThird;

    next();
  };

  /**
   * MessengerUserDetail
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {*} req
   * @param {*} res
   * @returns {object} user payload
   * @memberof Authentication
   */
  messengerUserDetail = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const token: any = this.Utils.Token.extract(req, res);
    if (!token) {
      return this.Responses.error(
        this.Notification.httpCode.unauthorized(),
        this.Notification.httpMessage.unauthorized(),
        res,
      );
    }

    const { errors, payload } = this.Utils.Token.decode(token);

    if (errors) {
      return this.Responses.error(
        this.Notification.httpCode.unauthorized(),
        this.Notification.httpMessage.unauthorized(),
        res,
      );
    }

    const { thirdUser, appThird } = payload;
    const user = await this.Service.User.findOneUser(thirdUser, appThird);

    req['userInfo'] = user;

    next();
  };
}

export default Authentication;
