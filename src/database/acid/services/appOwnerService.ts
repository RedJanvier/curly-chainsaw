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
    const accounts = await this.db.AppOwner.findAndCountAll();
    if (!accounts) return null;
    return accounts.count;
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
    const accounts = await this.db.AppOwner.findAndCountAll({
      attributes: [
        'app_owner_id',
        'third_id',
        'app_owner_legal',
        'user_link',
        'lang',
        'user_type',
        'user_src',
        'action',
      ],
      include: [
        {
          model: this.db.AppOwnerProfile,
          attributes: [
            'app_owner_pro_id',
            'app_owner',
            'first_name',
            'last_name',
            'phone_number',
            'about',
            'avatar',
            'main_phone',
            'secondary_phone',
            'country',
          ],
        },
      ],
    });
    if (!accounts) return null;
    return accounts.count;
  };

  /**
   * Get all follow up accounts created
   * @author Christian Matabaro
   * @since 0.001
   *
   * @returns {*} Accounts ! null
   * @memberof AppOwnerServices
   */
  followUpAccounts = async (): Promise<Response | null> => {
    const accounts = await this.db.AppOwner.findAndCountAll({
      attributes: [
        'app_owner_id',
        'third_id',
        'app_owner_legal',
        'user_link',
        'lang',
        'user_type',
        'user_src',
        'action',
      ],
      include: [
        {
          model: this.db.AppOwnerProfile,
          attributes: [
            'app_owner_pro_id',
            'app_owner',
            'first_name',
            'last_name',
            'phone_number',
            'about',
            'avatar',
            'main_phone',
            'secondary_phone',
            'country',
          ],
          where: {
            [Op.or]: [{ phone_number: '' }, { email: '' }],
          },
        },
      ],
    });
    if (!accounts) return null;
    return accounts.count;
  };
}

export default AppOwnerServices;
