import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';
import joiValidator from '../helpers/joiValidator';

/**
 * Handle Validation
 */
export default class Validate {
  /**
   * User validation
   * @param {object} req request
   * @param {object} res response
   * @param {object} next cursor
   * @return {*} Joi validation report
   */
  static user = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object().keys({
      fullname: Joi.string()
        .regex(/^[a-zA-Z]+$/)
        .min(3)
        .max(128)
        .required(),
      email: Joi.string()
        .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
        .required(),
      phonenumber: Joi.string()
        .regex(/^[a-zA-Z0-9]+$/)
        .min(10)
        .max(13)
        .required(),
      password: Joi.string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,128}$/)
        .required(),
    });

    joiValidator(req, res, schema, next);
  };

  static messengerUser = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object().keys({
      fbid: Joi.string().required(),
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      phonenumber: Joi.string(),
      email: Joi.string(),
      gender: Joi.string(),
    });

    joiValidator(req, res, schema, next);
  };
}
