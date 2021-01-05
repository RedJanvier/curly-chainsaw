import { Op } from 'sequelize';

/**
 * User database services
 */
class UserAgentServices {
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
   * @param {string} email user email
   * @returns {Promise} User ! null
   * @memberof UserAgentServices
   */
  findByEmail = async (email: string): Promise<Response | null> => {
    const user = await this.db.SysUser.findOne({
      where: { email },
    });
    if (!user) return null;
    return user;
  };

  /**
   * Find by either username, email, phone_number
   * @author Christian Matabaro
   * @since 0.001
   *
   * @param {string} loginData user loginData
   * @returns {Promise} User ! null
   * @memberof UserAgentServices
   */
  findAgentInfo = async (loginData: string): Promise<Response | null> => {
    const user = await this.db.SysUser.findOne({
      where: {
        [Op.or]: [
          { email: loginData },
          { phone_number: loginData },
          { username: loginData },
        ],
        active: 1,
      },
    });
    if (!user) return null;
    return user;
  };

  /**
   * Create
   * @author Christian Matabaro
   * @since 0.001
   *
   * @param {Object} user user data
   * @returns {Promisie} User ! null
   * @memberof UserAgentServices
   */
  create = async (user: any): Promise<Response | null> => {
    const newUser = await this.db.SysUser.create({
      ...user,
    });
    if (!newUser) return null;
    return newUser;
  };
}

export default UserAgentServices;
