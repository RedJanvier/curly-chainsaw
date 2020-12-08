/**
 * HistorySearchDoc
 */

class HistorySearchDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        hostyid: {
          type: 'bigint',
        },
        searchid: { type: 'integer' },
        budgetmax: { type: 'float' },
        budgetmin: { type: 'float' },
        lat: { type: 'float' },
        long: { type: 'float' },
        dateinsert: { type: 'date' },
        fenced: { type: 'boolean' },
        detailtextlocation: { type: 'text' },
      },
      xml: {
        name: 'HistorySearch',
      },
    };
  };
}
export default HistorySearchDoc;
