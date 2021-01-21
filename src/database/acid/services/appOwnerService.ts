import { Op } from 'sequelize';

/**
 * Application owner services
 */
class AppOwnerServices {
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
   * @memberof AppOwnerServices
   */
  findAllAccounts = async (): Promise<Response | null> => {
    const accounts = await this.db.AppOwner.findAll();
    if (!accounts) return null;
    return accounts;
  };

  /**
   * Get all successful accounts created
   * @author Christian Matabaro
   * @since 0.001
   *
   * @returns {*} Accounts ! null
   * @memberof AppOwnerServices
   */
  successfulAccounts = async (): Promise<Response | null> => {
    const accounts = await this.db.AppOwner.findAll({
      include: [
        {
          model: this.db.AppOwnerProfile,
        },
      ],
    });
    if (!accounts) return null;
    return accounts;
  };
}

export default AppOwnerServices;
