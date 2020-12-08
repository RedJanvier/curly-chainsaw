import { Response } from 'express';
import { Ok, Success, Error } from '../../../../core/interfaces/responses';

/**
 * Res
 * @implements Ok, Success, Error
 */
class Res implements Ok, Success, Error {
  /**
   * Ok
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {integer} statusCode - status code of the response
   * @param {string} message -  message of the response
   * @param {method} res - response method to pass the response in json
   * @return {object} returns a response
   * @memberof Res
   */
  ok = (statusCode: number, message: string, res: Response): Response => {
    return res.status(statusCode).json({
      status: statusCode,
      message,
    });
  };
  /**
   * Success
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {integer} statusCode - status code of the response
   * @param {string} message -  message of the response
   * @param {object} data - data passed to the response
   * @param {method} res - response method to pass the response in json
   * @return {object} returns a response
   * @memberof Res
   */
  success = (
    statusCode: number,
    message: string,
    data: any,
    res: Response,
  ): Response => {
    return res.status(statusCode).json({
      status: statusCode,
      message,
      data,
    });
  };

  /**
   * Error
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {integer} statusCode - status code of the response
   * @param {string} error -  error of the response
   * @param {method} res - response method to pass the response in json
   * @return {object} returns a response
   * @memberof Res
   */
  error = (statusCode: number, error: string, res: Response): Response => {
    return res.status(statusCode).json({
      status: statusCode,
      error,
    });
  };
}

export default Res;
