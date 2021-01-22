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
    const totStore: any = await this.Service.Application.findAllAccounts();
    const successStore: any = await this.Service.Application.successfulStore();
    const totAccount: any = await this.Service.AppOwner.findAllAccounts();
    const successAccount: any = await this.Service.AppOwner.successfulAccounts();
    const followupAccounts: any = await this.Service.AppOwner.followUpAccounts();
    const followupStores: any = await this.Service.Application.followUpStore();

    let db_stores = [];

    for (let store of followupStores) {
      if (
        store.AppDealIns.length === 0 ||
        store.AppOwner === null ||
        store.ProfilePlu === null
      ) {
        db_stores.push(store);
      }
    }
    const followupStore = db_stores.length;

    const responseModel = {
      general: {
        accounts: totAccount,
        store: totStore,
      },
      successful: {
        accounts: successAccount,
        store: successStore,
      },
      follow_up_required: {
        accounts: followupAccounts,
        store: followupStore,
      },
    };
    return this.Responses.success(
      this.Notification.httpCode.ok(),
      this.Notification.httpMessage.ok(),
      {
        responseModel,
      },
      res,
    );
  };
}

export default DashboardController;
