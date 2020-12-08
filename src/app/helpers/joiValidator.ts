import { Request, Response, NextFunction } from 'express';
import Responses from './responses';

const options = {
  language: {
    key: '{{key}} ',
  },
};

const joiValidator = (
  req: Request,
  res: Response,
  schema: any,
  next: NextFunction,
) => {
  const { error } = schema.validate(req.body, options);
  if (error) {
    return Responses.errorResponse(res, error);
  }
  next();
};

export default joiValidator;
