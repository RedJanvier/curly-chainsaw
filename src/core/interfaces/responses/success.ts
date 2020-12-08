import { Response } from 'express';
interface Success {
  success(
    statusCode: number,
    message: string,
    data: any,
    res: Response,
  ): Response;
}

export default Success;
