/**
 * ServiceDoc
 */

class ServiceDoc {
  /**
   * @param
   * @return object
   */
  public static doc = () => {
    return {
      type: 'object',
      properties: {
        service: {
          type: 'boolean',
        },
        description: { type: 'string' },
        name: { type: 'string' },
      },
      xml: {
        name: 'Service',
      },
    };
  };
}
export default ServiceDoc;
