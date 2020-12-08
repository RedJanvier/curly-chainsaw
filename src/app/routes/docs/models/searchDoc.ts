/**
 * SearchDoc
 */

class SearchDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        searchid: {
          type: 'biginteger',
        },
        id: {
          type: 'biginteger',
        },
        userId: {
          type: 'biginteger',
        },
        fbpageId: {
          type: 'string',
        },
        clientid: {
          type: 'biginteger',
        },
        typeproperty: {
          type: 'integer',
        },
        long: {
          type: 'float',
        },
        lat: {
          type: 'float',
        },
        country: {
          type: 'string',
        },
        bedroom: {
          type: 'integer',
        },
        fenced: {
          type: 'boolean',
        },
        level: {
          type: 'string',
        },
        budget1: {
          type: 'float',
        },
        budget2: {
          type: 'float',
        },
        status: {
          type: 'string',
        },
        found: {
          type: 'boolean',
        },
        resultsent: {
          type: 'date',
        },
        datesearch: {
          type: 'date',
        },
        lastresultid: {
          type: 'biginteger',
        },
      },
      xml: {
        name: 'Search',
      },
    };
  };
}
export default SearchDoc;
