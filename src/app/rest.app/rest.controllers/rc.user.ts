import { Request, Response } from 'express';

/**
 * User Controller
 *
 */
class UserController {
  /**
   * @constructor
   * @author Verdotte Aututu
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
   * Create ~ signup only for client
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {*} req
   * @param {*} res
   * @returns {object} user payload
   * @memberof UserController
   */
  create = async (req: Request, res: Response): Promise<Response> => {
    const hashedPassword = this.Utils.Password.hash(req.body.password);

    const { email, fullname, phonenumber } = req.body;

    const userModel = {
      email,
      fullname,
      phonenumber,
      password: hashedPassword,
    };
    const response: any = await this.Service.User.create(userModel);

    const token = this.Utils.Token.generate(response);

    return this.Responses.success(
      this.Notification.httpCode.created(),
      this.Notification.httpMessage.created(),
      { token, response },
      res,
    );
  };


}

export default UserController;
