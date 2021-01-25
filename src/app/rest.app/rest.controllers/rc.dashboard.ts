import { Request, Response } from 'express';
import db from '../../../database/definitions/models';

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
    const successStores: any = await this.Service.Application.successfulStore();
    const totAccount: any = await this.Service.AppOwner.findAllAccounts();
    const successAccounts: any = await this.Service.AppOwner.successfulAccounts();
    const followupAccounts: any = await this.Service.AppOwner.followUpAccounts();

    let db_account = [];

    for (let account of successAccounts) {
      if (account.AppOwnerProfile != null) {
        db_account.push(account);
      }
    }
    const successAccount = db_account.length;

    let db_stores = [];
    let db_successStores = [];

    for (let store of successStores) {
      if (
        store.AppDealIns.length !== 0 ||
        store.AppOwner !== null ||
        store.ProfilePlu !== null
      ) {
        db_stores.push(store);
      } else {
        db_successStores.push(store);
      }
    }
    const followupStore = db_stores.length;
    const successStore = db_successStores.length;

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
