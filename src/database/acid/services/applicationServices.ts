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
    const accounts = await this.db.Application.findAndCountAll();
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
    const accounts = await this.db.Application.findAndCountAll({
      include: [
        {
          model: this.db.ApplicationProfile,
          attributes: [
            'app_profile_id',
            'app',
            'title',
            'sub_title',
            'email',
            'location',
            'phone_number',
            'common_place',
            'avatar',
            'website',
            'cover',
            'long',
            'lat',
          ],
        },
        {
          model: this.db.ProfilePlus,
          attributes: [
            'profile_plus_id',
            'app',
            'app_third',
            'agent_name',
            'operate_in',
            'country',
            'phone_number',
            'phone_number_2',
            'delivery_number',
            'return_policy',
            'address',
            'app_sell_in',
            'lat',
            'long',
            'formatted_address',
            'active',
          ],
        },
        {
          model: this.db.AppDealIn,
          attributes: [
            'app_deal_in_id',
            'app',
            'app_third',
            'description',
            'category_title',
            'category',
            'type_gender',
            'active',
          ],
        },
        {
          model: this.db.AppOwner,
          include: [
            {
              model: this.db.AppSubscription,
              attributes: [
                'app_subscription_id',
                'payment_transaction',
                'app_owner',
                'app_third',
                'package',
                'active',
                'expiry_date',
                'validity',
                'unit',
              ],
              where: { active: true },
            },
          ],
        },
      ],
    });
    if (!accounts) return null;
    return accounts.count;
  };

  /**
   * Get all the followup store
   * @author Christian Matabaro
   * @since 0.001
   *
   * @returns {*} Account ! null
   * @memberof ApplicationServices
   */
  followUpStore = async (): Promise<Response | null> => {
    const accounts = await this.db.Application.findAll({
      include: [
        {
          model: this.db.ApplicationProfile,
          attributes: ['app_profile_id', 'app'],
        },
        {
          model: this.db.ProfilePlus,
          attributes: ['profile_plus_id', 'app', 'app_third'],
        },
        {
          model: this.db.AppDealIn,
          attributes: ['app_deal_in_id', 'app', 'app_third'],
        },
        {
          model: this.db.AppOwner,
          include: [
            {
              model: this.db.AppSubscription,
              attributes: [
                'app_subscription_id',
                'payment_transaction',
                'app_owner',
                'app_third',
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
