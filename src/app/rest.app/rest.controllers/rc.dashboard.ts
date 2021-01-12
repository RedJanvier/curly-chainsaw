import { Request, Response } from 'express';

/**
 * Dashboard Controller
 *
 */
class DashboardController {
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
   * Get all~ User get all the account
   * @author Christian Matabaro
   * @since 0.001
   *
   * @param {*} req
   * @param {*} res
   * @returns {object} accounts payload
   * @memberof DashboardController
   */
  getAccounts = async (req: Request, res: Response): Promise<Response> => {
    const response: any = await this.Service.User.getAccounts();

    return this.Responses.success(
      this.Notification.httpCode.ok(),
      this.Notification.httpMessage.ok(),
      { response },
      res,
    );
  };
}

export default DashboardController;
