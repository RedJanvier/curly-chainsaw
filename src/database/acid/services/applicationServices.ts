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
    const accounts = await this.db.Application.findAndCountAll({
      attributes: ['app_id'],
    });
    if (!accounts) return null;
    return accounts.count;
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
      attributes: ['app_id', 'app_owner'],
      include: [
        {
          model: this.db.ApplicationProfile,
          attributes: ['app_profile_id', 'app'],
        },
        {
          model: this.db.ProfilePlus,
          attributes: ['profile_plus_id', 'app'],
        },
        {
          model: this.db.AppDealIn,
          attributes: ['app_deal_in_id', 'app'],
        },
        {
          model: this.db.AppOwner,
          attributes: ['app_owner_id'],
          include: [
            {
              model: this.db.AppSubscription,
              attributes: [
                'app_subscription_id',
                'payment_transaction',
                'app_owner',
              ],
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
