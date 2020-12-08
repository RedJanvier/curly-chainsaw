/**
 * PropertiesDoc
 */

class PropertiesDoc {
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
        description: { type: 'string' },
        picture: { type: 'text' },
      },
      xml: {
        name: 'Properties',
      },
    };
  };
}
export default PropertiesDoc;
