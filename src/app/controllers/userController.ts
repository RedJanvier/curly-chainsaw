import { Request, Response } from 'express';
import { HTTP_CREATED } from '../../core/constants/httpStatusCodes';

/**
 * User Controllers
 */
class UserController {
  constructor(
    private Password: any,
    private Token: any,
    private Responses: any,
    private Service: any,
    private notifier: any,
  ) {}
  /**
   * Create a user
   * @param {*} req
   * @param {*} res
   * @returns {object} user payload
   */
  create = async (req: Request, res: Response): Promise<Response> => {
    const hashedPassword = this.Password.hashPassword(req.body.password);
    const { email, fullname, phonenumber } = req.body;
    const user = {
      email,
      fullname,
      phonenumber,
      password: hashedPassword,
    };
    const response: any = await this.Service.User.create(user);
    const token = this.Token.generateToken(response.get());

    return this.Responses.handleSuccess(
      HTTP_CREATED,
      'User registered successfully',
      { token, response },
      res,
    );
  };
}

export default UserController;
