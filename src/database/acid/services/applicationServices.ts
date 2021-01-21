import { access } from 'fs';
import { Op } from 'sequelize';

/**
 * Application services
 */
class ApplicationServices {
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
   * @returns {*} Account ! null
   * @memberof ApplicationServices
   */

  findAllAccounts = async (): Promise<Response | null> => {
    const accounts = await this.db.Application.findAll();
    if (!accounts) return null;
    return accounts;
  };

  /**
   * Get all the store created successfully
   * @author Christian Matabaro
   * @since 0.001
   *
   * @returns {*} Account ! null
   * @memberof ApplicationServices
   */
  successfulStore = async (): Promise<Response | null> => {
    const accounts = await this.db.Application.findAll({
      include: [
        {
          model: this.db.ApplicationProfile,
        },
        {
          model: this.db.ProfilePlus,
        },
        {
          model: this.db.AppDealIn,
        },
        {
          model: this.db.AppOwner,
          include: [
            {
              model: this.db.AppSubscription,
              where: { active: true },
            },
          ],
        },
      ],
    });
    if (!accounts) return null;
    return accounts;
  };
}

export default ApplicationServices;
