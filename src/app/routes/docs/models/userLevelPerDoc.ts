/**
 * UserLevlPerDoc
 */

class UserLevlPerDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        userlevelid: {
          type: 'integer',
        },
        tablename: {
          type: 'string',
        },
        permission: {
          type: 'integer',
        },
      },
      xml: {
        name: 'UserLevlPermissions',
      },
    };
  };
}
export default UserLevlPerDoc;
