/**
 * CountriesDoc
 */

class CountriesDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        code: {
          type: 'integer',
        },
        currency: {
          type: 'string',
        },
        name: { type: 'string' },
        telcode: { type: 'string' },
        rate: { type: 'float' },
        use: {
          type: 'boolean',
        },
        dailyrate: { type: 'float' },
      },
      xml: {
        name: 'Countries',
      },
    };
  };
}
export default CountriesDoc;
