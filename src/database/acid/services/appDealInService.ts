import { Op } from 'sequelize';

/**
 * Application deals in services
 */
class AppDealInServices {
  /**
   * @constructor
   * @author Christian Matabaro
   * @since 0.001
   *
   * @param {any} db
   */
  constructor(private db: any) {}
  /**
   * Get all the accounts
   * @author Christian Matabaro
   * @since 0.001
   *
   * @returns {*} Accounts ! null
   * @memberof AppDealInServices
   */
  findAllAccounts = async (): Promise<Response | null> => {
    const accounts = await this.db.AppDealIn.findAll();
    if (!accounts) return null;
    return accounts;
  };
}

export default AppDealInServices;
