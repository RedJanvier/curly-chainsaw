/**
 * CustomerCareDoc
 */

class CustomerCareDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        id: {
          type: 'bigint',
        },
        address: { type: 'string' },
        fbid: { type: 'string' },
        phone_number: { type: 'string' },
        reach_customer: { type: 'integer' },
        satisfaction: { type: 'boolean' },
        serveby_agent: { type: 'date' },
        experience_description: { type: 'text' },
        created_at: { type: 'date' },
      },
      xml: {
        name: 'CustomerCareDoc',
      },
    };
  };
}
export default CustomerCareDoc;
