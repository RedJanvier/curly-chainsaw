import { Request, Response, Application } from 'express';
import { auth } from './auth';

import Swag from './docs/swagger';
import Sys from '../../system';

const { Responses, Notification } = Sys.Assistance;

const apiVersion = '/api/v1';

/**
 * Rest ~ Routing Config ~ Entry point
 * @call  Rest Service
 *
 * @author Chadrack R. Alfred
 * @since Platfrom v0.0.1
 * @since Grest Framework v1.0.0
 */
const router = (app: Application) => {
  app.use(apiVersion, auth);
  app.use(Swag.use().url, Swag.use().serve, Swag.use().ui);
  app.get('/', (req: Request, res: Response) =>
    Responses.ok(200, 'Welcome to Support OnDuka API', res),
  );

  app.all('/', (req: Request, res: Response) =>
    Responses.error(
      Notification.httpCode.methodNotAllowed(),
      'Invalid method',
      res,
    ),
  );
  app.use('*', (req: Request, res: Response) =>
    Responses.error(Notification.httpCode.notFound(), 'Invalid route', res),
  );
};

export default router;
