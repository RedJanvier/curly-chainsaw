/**
 * userHistoryDoc
 */

class UserHistoryDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        message: {
          type: 'string',
        },
        dated: {
          type: 'date',
        },
        userId: {
          type: 'biginteger',
        },
        fbpageId: {
          type: 'string',
        },
        clientid: {
          type: 'integer',
        },
      },
      xml: {
        name: 'UserHistory',
      },
    };
  };
}
export default UserHistoryDoc;
