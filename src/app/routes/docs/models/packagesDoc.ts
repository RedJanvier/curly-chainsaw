/**
 * PackageDoc
 */

class PackageDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        packageID: {
          type: 'bigint',
        },
        price: {
          type: 'float',
        },
        validity: {
          type: 'boolean',
        },
        servicetype: {
          type: 'boolean',
        },

        channel: {
          type: 'boolean',
        },
        numberelements: { type: 'integer' },
        service: { type: 'boolean' },
        country: { type: 'string' },
        available: { type: 'boolean', deafualtVlue: 0 },
        description: { type: 'text' },
        minimum: { type: 'float' },
      },
      xml: {
        name: 'Packages',
      },
    };
  };
}
export default PackageDoc;
