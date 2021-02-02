import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import Token from '../../../core/abstractions/token';

/**
 * TokenUtils
 * @extends Token
 */
class TokenUtils extends Token {
  /**
   * Generate
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {object} payload the payload to encode the token
   * @param {object} expiresIn the expiration time of the token
   * @returns {string} the generated token
   * @memberof TokenUtils
   */
  generate = (
    payload: any = {},
    expiresIn: any = { expiresIn: '1d' },
  ): string | null => {
    let isValidPayload = true;
    if (typeof payload === 'number') {
      isValidPayload = false;
    } else if (payload === null) {
      isValidPayload = false;
    } else if (typeof payload === 'object' && !Object.keys(payload).length) {
      isValidPayload = false;
    }

    return isValidPayload
      ? jwt.sign({ payload }, process.env.JWT_KEY_KEY, expiresIn)
      : null;
  };

  /**
   * Decode
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {string} token the token to decode
   * @returns {object} the decoded token
   * @memberof TokenUtils
   */
  decode = (token: string = ''): any => {
    try {
      return jwt.verify(token, process.env.JWT_KEY_KEY);
    } catch (error) {
      return {
        errors: error,
      };
    }
  };

  /**
   * Extract
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {*} req request
   * @param {*} res response
   * @returns {string} token
   * @memberof TokenUtils
   */
  extract = (req: Request, res: Response): string => {
    const { authorization = '' } = req.headers;
    const token: string = authorization.slice(7);
    return token;
  };
}

export default TokenUtils;
