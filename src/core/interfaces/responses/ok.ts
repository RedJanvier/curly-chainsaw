import { Response } from 'express';
interface Ok {
  ok(statusCode: number, message: string, res: Response): Response;
}

export default Ok;
