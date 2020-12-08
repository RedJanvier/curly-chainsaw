/**
 * userDoc
 */

class HomePropertyDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        userid: { type: 'bigint' },
        photo: { type: 'text' },
        reviewcomment: { type: 'tex' },
        linktovisit: { type: 'text' },
        review: { type: 'string' },
        paymentid: { type: 'bigint' },
        email: { type: 'sting' },
        phonenumber: { type: 'string' },
        idhomeads: { type: 'bigint' },
        views: { type: 'bigint' },
        contactclicks: { type: 'bigint' },
        propertytype: { type: 'integer' },
      },
      xml: {
        name: 'HomeProperties',
      },
    };
  };
}
export default HomePropertyDoc;
