/**
 * PayoutDoc
 */

class PayoutDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        paymentid: {
          type: 'bigint',
        },
        via: { type: 'bigint' },
        currency: {
          type: 'bigint',
        },
        package: { type: 'integer' },
        userid: { type: 'bigint' },
        amountcurrency: { type: 'float' },
        datesub: { type: 'date' },
        details: { type: 'text' },
        transactionid: { type: 'string' },
        status: { type: 'string' },
      },
      xml: {
        name: 'Payout',
      },
    };
  };
}
export default PayoutDoc;
