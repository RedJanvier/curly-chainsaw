import { Op } from 'sequelize';

/**
 * Application owner profile services
 */
class AppOwnerProfileServices {
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
   * @memberof AppOwnerProfileServices
   */
  findAllAccounts = async (): Promise<Response | null> => {
    const accounts = await this.db.AppOwnerProfile.findAll();
    if (!accounts) return null;
    return accounts;
  };
}

export default AppOwnerProfileServices;
