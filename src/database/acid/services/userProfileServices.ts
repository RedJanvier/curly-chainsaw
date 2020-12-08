/**
 * User database services
 */
class UserProfileServices {
  /**
   * @constructor
   * @since 0.001
   *
   * @param {any} db
   */
  constructor(private db: any) {}

  /**
   * Create
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {Object} user user data
   * @returns {*} User ! null
   * @memberof UserProfileServices
   */
  create = async (user: any): Promise<Response | null> => {
    const newUser = await this.db.UserProfile.create({
      ...user,
    });
    if (!newUser) return null;
    return newUser;
  };

  /**
   * FindByMessengerId
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {string} fbid facebook id
   * @returns {*} User ! null
   * @memberof UserProfileServices
   */
  findFacebookId = async (fbid: string): Promise<Response | null> => {
    const user = await this.db.UserProfile.findOne({
      where: { user: fbid },
    });
    if (!user) return null;
    return user;
  };
}

export default UserProfileServices;
