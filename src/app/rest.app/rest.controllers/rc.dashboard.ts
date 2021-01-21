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
    const totAcc: any = await this.Service.AppOwner.findAllAccounts();
    const successAccount: any = await this.Service.AppOwner.successfulAccounts();

    const totalAccount = totAcc.length;
    const totalStore = totStore.length;
    const totalSuccessfulAccount = successAccount.length;
    const totalSuccessfulStore = successStore.length;

    let db_account = [];
    for (let acc of successAccount) {
      if (
        acc.AppOwnerProfile.phone_number === '' &&
        acc.AppOwnerProfile.email === ''
      ) {
        db_account.push(acc);
      }
    }
    const followupAccount = db_account.length;

    let db_stores = [];

    for (let store of successStore) {
      if (
        store.AppDealIns.length === 0 &&
        store.AppOwner === null &&
        store.ProfilePlu === null
      ) {
        db_stores.push(store);
      }
    }
    const followupStore = db_stores.length;

    const responseModel = {
      general: {
        accounts: totalAccount,
        store: totalStore,
      },
      successful: {
        accounts: totalSuccessfulAccount,
        store: totalSuccessfulStore,
      },
      follow_up_required: {
        accounts: followupAccount,
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
