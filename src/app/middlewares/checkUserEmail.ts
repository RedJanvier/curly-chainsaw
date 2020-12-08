import { Request, Response, NextFunction } from 'express';
import { HTTP_EXIST } from '../../core/constants/httpStatusCodes';
import Service from '../../database/acid/services/index';

const checkUserEmail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;

  const emailExist = await Service.User.findByEmail(email);
  if (emailExist) {
    return res
      .status(HTTP_EXIST)
      .json({ status: 409, message: 'Email already used' });
  }

  next();
};

export default checkUserEmail;
