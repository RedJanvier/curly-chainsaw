import { Request, Response, NextFunction } from 'express';
import Validation from '../../../core/abstractions/validation';

/**
 * UserValidator
 * @extends Validation
 */
class UserValidator extends Validation {
  /**
   * Signup
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {*} req request
   * @param {*} res response
   * @param {*} next cursor
   * @memberof UserValidator
   */
  signup = (req: Request, res: Response, next: NextFunction): void => {
    const schema = this.joi.object().keys({
      fullname: this.joi
        .string()
        .min(3)
        .max(128)
        .required(),
      email: this.joi
        .string()
        .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'email')
        .required(),
      phonenumber: this.joi
        .string()
        .regex(/^[a-zA-Z0-9]+$/)
        .min(10)
        .max(13)
        .required(),
      password: this.joi
        .string()
        .min(6)
        .required(),
    });

    this.joiHandler(req, res, schema, next);
  };

  /**
   * Login
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {*} req request
   * @param {*} res response
   * @param {*} next cursor
   * @memberof UserValidator
   */
  login = (req: Request, res: Response, next: NextFunction): void => {
    const schema = this.joi.object().keys({
      email: this.joi
        .string()
        .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
        .required(),
      password: this.joi.string().required(),
    });

    this.joiHandler(req, res, schema, next);
  };

  /**
   * Login a user by username, email or phone number
   * @author Christian Matabaro
   * @since 0.001
   *
   * @param {*} req request
   * @param {*} res response
   * @param {*} next cursor
   * @memberof UserValidator
   */
  loginAgent = (req: Request, res: Response, next: NextFunction): void => {
    const schema = this.joi.object().keys({
      login: this.joi
        .string()
        .regex(
          /^(?:[A-Z\d][A-Z\d_-]{5,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i,
          'username, email or phone number',
        )
        .required(),

      password: this.joi.string().required(),
    });

    this.joiHandler(req, res, schema, next);
  };

  /**
   * Login
   * @author Eliezer Basubi
   * @since 0.001
   *
   * @param {*} req request
   * @param {*} res response
   * @param {*} next cursor
   * @memberof UserValidator
   */
  messenger = (req: Request, res: Response, next: NextFunction): void => {
    const schema = this.joi.object().keys({
      firstName: this.joi.string().required(),
      lastName: this.joi.string().required(),
      dateOfBirth: this.joi.date(),
      email: this.joi
        .string()
        .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
      avatar: this.joi.string(),
    });

    this.joiHandler(req, res, schema, next);
  };

  /**
   * Signup
   * @author Christian Matabaro
   * @since 0.001
   *
   * @param {*} req request
   * @param {*} res response
   * @param {*} next cursor
   * @memberof UserValidator
   */
  signupAgent = (req: Request, res: Response, next: NextFunction): void => {
    const schema = this.joi.object().keys({
      username: this.joi
        .string()
        .min(3)
        .max(40)
        .required(),
      full_name: this.joi
        .string()
        .min(3)
        .max(128)
        .required(),
      email: this.joi
        .string()
        .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
        .required(),
      phone_number: this.joi
        .string()
        .regex(/^[a-zA-Z0-9]+$/)
        .min(10)
        .max(13)
        .required(),
      password: this.joi
        .string()
        .min(6)
        .required(),
      confirm_password: this.joi
        .string()
        .required()
        .equal(this.joi.ref('password'))
        .options({ messages: { 'any.only': 'Passwords do not match' } }),
    });

    this.joiHandler(req, res, schema, next);
  };
}

export default UserValidator;
