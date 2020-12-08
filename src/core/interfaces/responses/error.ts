import { Response } from 'express';
interface Error {
  error(statusCode: number, error: string, res: Response): Response;
}

export default Error;
