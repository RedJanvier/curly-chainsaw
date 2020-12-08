/**
 * User database services
 */
class UserServices {
  /**
   * @constructor
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {any} db
   */
  constructor(private db: any) {}
  /**
   * FindByEmail
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {string} email user email
   * @returns {Promise} User ! null
   * @memberof UserServices
   */
  findByEmail = async (email: string): Promise<Response | null> => {
    const user = await this.db.Default.findOne({
      where: { email },
    });
    if (!user) return null;
    return user;
  };

  /**
   * Create
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {Object} user user data
   * @returns {Promisie} User ! null
   * @memberof UserServices
   */
  create = async (user: any): Promise<Response | null> => {
    const newUser = await this.db.Default.create({
      ...user,
    });
    if (!newUser) return null;
    return newUser;
  };
}

export default UserServices;
