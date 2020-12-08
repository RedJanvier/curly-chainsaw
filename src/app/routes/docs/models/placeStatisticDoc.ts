/**
 * PlaceStatisticsDoc
 */

class PlaceStatisticsDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        photorequest: {
          type: 'bigint',
        },
        contactrequest: {
          type: 'bigint',
        },
        locationrequest: {
          type: 'bigint',
        },
        result: { type: 'bigint' },
        detailrequest: { type: 'bigint' },
        placeid: {
          type: 'bigint',
        },
        reservationrequest: {
          type: 'bigint',
          defaultValue: 0,
        },
      },
      xml: {
        name: 'PlaceStatistics',
      },
    };
  };
}
export default PlaceStatisticsDoc;
