/**
 * PlaceDoc
 */

class PlaceDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        userId: {
          type: 'biginteger',
          format: 'int64',
        },
        placeid: {
          type: 'biginteger',
        },
        typep: {
          type: 'integer',
        },
        long: {
          type: 'float',
        },
        lat: {
          type: 'float',
        },
        pictures: {
          type: 'text',
        },
        loctextinfos: {
          type: 'text',
        },
        country: {
          type: 'string',
        },
        price: {
          type: 'float',
        },
        preiceunit: {
          type: 'string',
        },
        warranty: {
          type: 'integer',
        },
        currency: {
          type: 'string',
          default: 'UGX',
        },
        rooms: {
          type: 'integer',
        },
        bed: {
          type: 'integer',
        },
        fenced: {
          type: 'boolean',
        },
        level: {
          type: 'integer',
        },
        fullyfurnished: {
          type: 'integer',
        },
        kitchen: {
          type: 'boolean',
        },
        bathroom: {
          type: 'boolean',
        },
        toilet: {
          type: 'boolean',
        },
        available: {
          type: 'integer',
          default: '0',
        },
        waterBill: {
          type: 'integer',
          default: '0',
        },
        water: {
          type: 'integer',
        },
        electricity: {
          type: 'boolean',
        },
        electricityBill: {
          type: 'boolean',
        },
        security: {
          type: 'integer',
        },
        moredetails: {
          type: 'string',
        },
        sale: {
          type: 'integer',
        },
        sittingroom: {
          type: 'integer',
        },
        unitbooking: {
          type: 'string',
        },
        maxbooking: {
          type: 'integer',
        },
        mainpicture: {
          type: 'text',
        },
        commonaddress: {
          type: 'text',
        },
        numberofpeople: {
          type: 'integer',
        },
        projector: {
          type: 'integer',
        },
        soundsystem: {
          type: 'integer',
        },
        title: {
          type: 'string',
        },
        subscriptionid: {
          type: 'integer',
        },
        state: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
        checkin: {
          type: 'date',
        },
        checkout: {
          type: 'date',
        },
        levelremaining: {
          type: 'string',
        },
        relationship: {
          type: 'integer',
        },
        breakfast: {
          type: 'boolean',
        },
        displayexpiredate: {
          type: 'date',
        },
        clientid: {
          type: 'biginteger',
        },
        photo360: {
          type: 'text',
        },
      },
      xml: {
        name: 'Places',
      },
    };
  };
}
export default PlaceDoc;
