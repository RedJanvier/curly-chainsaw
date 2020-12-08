/**
 * AdsPriceDoc
 */

class AdsPriceDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        platform: { type: 'string' },
        price: { type: 'float' },
      },
      xml: {
        name: 'AdsPrice',
      },
    };
  };
}
export default AdsPriceDoc;
