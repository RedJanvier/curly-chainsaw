import { Request, Response } from 'express';

/**
 * User Agent Controller
 *
 */
class UserAgentController {
  /**
   * @constructor
   * @author Christian Matabaro
   * @since 0.001
   *
   * @param {any} Service
   * @param {any} Utils
   * @param {any} Responses
   * @param {any} Notification
   * @param {any} Helper
   */
  constructor(
    private Service: any,
    private Utils: any,
    private Responses: any,
    private Notification: any,
  ) {}

  /**
   * Create ~ signup only for agent
   * @author Christian Matabaro
   * @since 0.001
   *
   * @param {*} req
   * @param {*} res
   * @returns {object} user payload
   * @memberof UserAgentController
   */
  create = async (req: Request, res: Response): Promise<Response> => {
    const { username, full_name, email, phone_number, password } = req.body;

    const userModel = {
      username,
      email,
      full_name,
      phone_number,
      password,
    };
    const response: any = await this.Service.UserAgent.create(userModel);

    const token = this.Utils.Token.generate(response);

    return this.Responses.success(
      this.Notification.httpCode.created(),
      this.Notification.httpMessage.created(),
      { token },
      res,
    );
  };

  /**
   * Create ~ Login for client
   * @author Christian Matabaro
   * @since 0.001
   *
   * @param {*} req
   * @param {*} res
   * @returns {object} user payload
   * @memberof UserController
   */
  login = async (req: Request, res: Response): Promise<Response> => {
    const { login, password } = req.body;

    const data = await this.Service.UserAgent.findAgentInfo(login);
    if (!data) {
      return this.Responses.error(
        this.Notification.httpCode.accessDenied(),
        this.Notification.httpMessage.restrict(),
        res,
      );
    }
    const userModel = {
      sys_user_id: data.sys_user_id,
      username: data.username,
      full_name: data.full_name,
      email: data.email,
      phone_number: data.phone_number,
      employee_permissions: data.employee_permissions,
    };

    const hashedPassword = data.password;

    const token = this.Utils.Token.generate(userModel);

    const match = this.Utils.Password.compare(password, hashedPassword);
    if (!match) {
      return this.Responses.error(
        this.Notification.httpCode.accessDenied(),
        this.Notification.httpMessage.incorrect(),
        res,
      );
    } else {
      return this.Responses.success(
        this.Notification.httpCode.ok(),
        this.Notification.httpMessage.ok(),
        { token },
        res,
      );
    }
  };
}

export default UserAgentController;
