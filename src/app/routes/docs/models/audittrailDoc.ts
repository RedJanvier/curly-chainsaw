/**
 * AuditTrailDoc
 */

class AuditTrailDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        datetime: {
          type: 'date',
        },
        script: { type: 'string' },
        user: { type: 'string' },
        action: { type: 'string' },
        table: { type: 'string' },
        field: { type: 'sting' },
        keyvalue: { type: 'string' },
        oldvalue: { type: 'text' },
        newvalue: { type: 'text' },
      },
      xml: {
        name: 'AuditTrail',
      },
    };
  };
}
export default AuditTrailDoc;
