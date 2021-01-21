import { Op } from 'sequelize';

/**
 * Profile plus services
 */
class ProfilePlusServices {
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
   * @returns {Promise} Accounts ! null
   * @memberof ProfilePlusServices
   */
  findAllAccounts = async (): Promise<Response | null> => {
    const accounts = await this.db.ProfilePlus.findAll();
    if (!accounts) return null;
    return accounts;
  };
}

export default ProfilePlusServices;
