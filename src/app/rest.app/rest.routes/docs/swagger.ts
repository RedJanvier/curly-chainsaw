import swaggerUi from 'swagger-ui-express';
import SwagDoc from './models/index';

/**
 * Swagger
 */
class Swag {
  /**
   * @param
   * @return object
   */
  public static use = () => {
    return {
      serve: swaggerUi.serve,
      ui: swaggerUi.setup(SwagDoc.doc()),
      url: '/api/v1/zplc/doc/',
    };
  };
}

export default Swag;
