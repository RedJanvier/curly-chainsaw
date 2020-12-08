import { Router } from 'express';
import asyncHandler from '../../middlewares/asyncHandler';
import checkUserEmail from '../../middlewares/checkUserEmail';
import Validate from '../../middlewares/validate';
import Controller from '../../controllers/index';

class AuthRouter {
  public router: Router = Router();

  constructor() {
    this.initRoute();
  }

  initRoute(): void {
    this.router.post(
      '/auth/signup',
      Validate.user,
      checkUserEmail,
      asyncHandler(Controller.User.create),
    );
  }
}

export const auth = new AuthRouter().router;
