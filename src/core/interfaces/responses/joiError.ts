import { Response } from 'express';
interface JoiError {
  joiError(res: Response, error: any): Response;
}

export default JoiError;
