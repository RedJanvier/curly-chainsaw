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
}

export default UserAgentController;
