/**
 * PaymentDoc
 */

class PaymentDoc {
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
        via: {
          type: 'sting',
        },
        currency: {
          type: 'string',
          defaultValue: 'ugx',
        },
        package: { type: 'integer' },
        userid: { type: 'integer' },
        amountcurrency: { type: 'float' },
        datesub: {
          type: 'date',
        },
        details: { type: 'text' },
        transactionid: { type: 'string' },
        status: { type: 'string' },
        creditcardnumber: { type: 'string' },
        datepaid: { type: 'date' },
        charge: { type: 'float' },
        expirydate: { type: 'date' },
        leftpost: { type: 'integer' },
        reason: { type: 'string' },
        bookunit: { type: 'boolean' },
        bookedplace: { type: 'biginteger' },
        bookcheckin: { type: 'date' },
        bookcheckout: { type: 'date' },
        expectedview: { type: 'integer' },
        lefview: { type: 'integer' },
        idhotelbooksubscription: { type: 'string' },
        phonenumberbooker: { type: 'string' },
        clientid: { type: 'integer' },
        numbermonth: { type: 'integer' },
        phonenumber: { type: 'string' },
        phonenumberpayout: { type: 'string' },
        statuspayout: { type: 'string' },
        datepaidout: { type: 'date' },
        dateinsertion: { type: 'date' },
      },
      xml: {
        name: 'Payments',
      },
    };
  };
}
export default PaymentDoc;
