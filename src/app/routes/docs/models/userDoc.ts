/**
 * userDoc
 */

class UserDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        userid: {
          type: 'integer',
          format: 'int64',
        },
        fullname: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
        phonenumber: {
          type: 'string',
        },
        longsearch: {
          type: 'integer',
          format: 'int64',
        },
        latsearch: {
          type: 'integer',
          format: 'int64',
        },
        gender: {
          type: 'string',
        },
        language: {
          type: 'string',
        },
        category: {
          type: 'string',
        },
        birthDay: {
          type: 'date',
        },
        fbid: {
          type: 'integer',
          format: 'int64',
        },
        whatsappid: {
          type: 'string',
        },
        telcountrycode: {
          type: 'string',
        },
        agerange: {
          type: 'string',
        },
        datepaidhistory: {
          type: 'date',
        },
        dateexpirehistory: {
          type: 'date',
        },
        latHotelMotel: {
          type: 'float',
        },
        longHotelMotel: {
          type: 'float',
        },
        locextinfosHotelMotel: {
          type: 'text',
        },
        expectedviews: {
          type: 'integer',
        },
        leftviews: {
          type: 'integer',
        },
        commonaddressHotelMotel: {
          type: 'string',
        },
        checkouttime: {
          type: 'date',
        },
        dealsin: {
          type: 'string',
        },
        stars: {
          type: 'string',
        },
        remainhotelbook: {
          type: 'float',
        },
        profilememo: {
          type: 'text',
        },
        fbloginuserid: {
          type: 'string',
        },
        lastphonenumber: {
          type: 'string',
        },
        profilepicture: {
          type: 'text',
        },
        picturetype: {
          type: 'string',
        },
        country: {
          type: 'string',
        },
        pictureheight: {
          type: 'string',
        },
        picturewidth: {
          type: 'string',
        },
        picturename: {
          type: 'string',
        },
        picturesize: {
          type: 'boolean',
          default: '1',
        },
        phonenumber2: {
          type: 'string',
        },
        picture: {
          type: 'string',
        },
        review: {
          type: 'integer',
          default: '0',
        },
      },
      xml: {
        name: 'User',
      },
    };
  };
}
export default UserDoc;
