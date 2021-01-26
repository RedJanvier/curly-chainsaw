import { Op } from 'sequelize';

/**
 * User database services
 */
class ApplicationProfileServices {
  /**
   * @constructor
   * @author Christian Matabaro
   * @since 0.001
   *
   * @param {any} db
   */
  constructor(private db: any) {}
  /**
   * FindByEmail
   * @author Christian Matabaro
   * @since 0.001
   *
   * @returns {Promise} accounts ! null
   * @memberof ApplicationProfileServices
   */

  /**
   * Get all the accounts
   * @author Christian Matabaro
   * @since 0.001
   *
   * @returns {*} Accounts ! null
   * @memberof ApplicationProfileServices
   */
  findAllAccounts = async (): Promise<Response | null> => {
    const accounts = await this.db.ApplicationProfile.findAll();
    if (!accounts) return null;
    return accounts;
  };
}

export default ApplicationProfileServices;
