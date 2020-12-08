import { HTTP_SERVER_ERROR } from '../../core/constants/httpStatusCodes';
import { Request, Response, NextFunction } from 'express';

const asyncHandler = (cb: any) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await cb(req, res, next);
  } catch (err) {
    return res.status(HTTP_SERVER_ERROR).json({
      status: HTTP_SERVER_ERROR,
      message: err.message,
    });
  }
  return true;
};

export default asyncHandler;
