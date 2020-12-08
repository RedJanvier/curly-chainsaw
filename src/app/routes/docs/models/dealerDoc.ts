/**
 * DealerDoc
 */

class DealerDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        typep: {
          type: 'boolean',
        },
        userid: {
          type: 'integer',
        },
      },
      xml: {
        name: 'DealerInPropertyType',
      },
    };
  };
}
export default DealerDoc;
