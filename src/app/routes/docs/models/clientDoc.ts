/**
 * ClientDoc
 */

class ClientDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        clientid: {
          type: 'integer',
        },
        userid: {
          type: 'bigint',
        },
      },
      xml: {
        name: 'Client',
      },
    };
  };
}
export default ClientDoc;
