/**
 * UserLevelDoc
 */

class UserLevelDoc {
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
        userlevelname: 'string',
      },
      xml: {
        name: 'UserLevel',
      },
    };
  };
}
export default UserLevelDoc;
