import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import Responses from '../../app/helpers/responses';
import { HTTP_UNAUTHORIZED } from '../constants/httpStatusCodes';

class Token {
  /**
   * @param {object} payload the payload to encode the token
   * @param {object} expiresIn the expiration time of the token
   * @returns {string} the generated token
   */
  static generateToken = (payload = {}, expiresIn = { expiresIn: '1d' }) => {
    let isValidPayload = true;
    if (typeof payload === 'number') {
      isValidPayload = false;
    } else if (payload === null) {
      isValidPayload = false;
    } else if (typeof payload === 'object' && !Object.keys(payload).length) {
      isValidPayload = false;
    }

    return isValidPayload
      ? jwt.sign({ payload }, process.env.JWT_SECRET_KEY, expiresIn)
      : null;
  };

  /**
   * @param {string} token the token to decode
   * @returns {object} the decoded token
   */
  static decode = (token: string = '') => {
    try {
      return jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (error) {
      return {
        errors: error,
      };
    }
  };

  static extractTokenFromHeader = (req: Request, res: Response) => {
    const { authorization = '' } = req.headers;
    const token: string = authorization.slice(7);
    if (!token) {
      return Responses.handleError(
        HTTP_UNAUTHORIZED,
        'Unauthorized access',
        res,
      );
    }
    return token;
  };
}

export default Token;
