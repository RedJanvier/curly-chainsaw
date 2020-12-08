import { Request, Response } from 'express';

abstract class Token {
  abstract generate(payload: any, expiresIn: any): string | null;
  abstract decode(token: string): any;
  abstract extract(req: Request, res: Response): string;
}

export default Token;
