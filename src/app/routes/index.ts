import { auth } from './auth';
import Swag from './docs/swagger';

import Responses from '../helpers/responses';
import {
  HTTP_OK,
  HTTP_METHOD_NOT_ALLOWED,
  HTTP_NOT_FOUND,
} from '../../core/constants/httpStatusCodes';
import { Request, Response, Application } from 'express';

const apiVersion = '/api/v1';

const router = (app: Application) => {
  app.use(apiVersion, auth);

  app.use(Swag.use().url, Swag.use().serve, Swag.use().ui);

  app.get('/', (req: Request, res: Response) =>
    Responses.handleOk(HTTP_OK, 'Welcome to Doctor P API', res),
  );

  app.all('/', (req: Request, res: Response) =>
    Responses.handleError(HTTP_METHOD_NOT_ALLOWED, 'Invalid method', res),
  );

  app.use('*', (req: Request, res: Response) =>
    Responses.handleError(HTTP_NOT_FOUND, 'Invalid route', res),
  );
};

export default router;
