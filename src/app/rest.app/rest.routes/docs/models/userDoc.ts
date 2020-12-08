/**
 * userDoc
 */

class UserDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        userid: {
          type: 'integer',
          format: 'int64',
        },
        fullname: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
        mid: {
          type: 'string',
        },
        active: {
          type: 'boolean',
        },
        created_at: {
          type: 'date',
        },
        updated_at: {
          type: 'date',
        },
      },
      xml: {
        name: 'User',
      },
    };
  };
}
export default UserDoc;
