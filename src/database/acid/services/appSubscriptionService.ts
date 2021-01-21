import { Op } from 'sequelize';

/**
 * Application subscription services
 */
class AppSubscriptionServices {
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
   * @memberof AppSubscriptionServices
   */
  findAllAccounts = async (): Promise<Response | null> => {
    const accounts = await this.db.AppSubscription.findAll();
    if (!accounts) return null;
    return accounts;
  };
}

export default AppSubscriptionServices;
