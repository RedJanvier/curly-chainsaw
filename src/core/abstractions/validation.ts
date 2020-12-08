import { Request, Response, NextFunction } from 'express';
import Joi from '@hapi/joi';
import { JoiError } from '../interfaces/responses';

/**
 * Validation
 * @implements JoiError
 */
abstract class Validation implements JoiError {
  joi: any = Joi;

  /**
   * JoiHandler
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @memberof Validation
   */
  joiHandler(
    req: Request,
    res: Response,
    schema: any,
    next: NextFunction,
  ): Response {
    const options = {
      language: {
        key: '{{key}} ',
      },
    };
    const { error } = schema.validate(req.body, options);
    if (error) {
      return this.joiError(res, error);
    }
    next();
  }

  /**
   * joiError
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {string} error -  error of the response
   * @param {method} res - response method to pass the response in json
   * @return {object} returns a response
   */

  joiError(res: Response, error: any): Response {
    return res.status(400).json({
      status: 400,
      message: error.details[0].message.replace(/[^a-zA-Z0-9 ]/g, ''),
    });
  }
}

export default Validation;
