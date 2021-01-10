import { Router } from 'express';
import dotenv from 'dotenv';
import asyncHandler from '../../rest.middlewares/rm.asyncHandler';
import Controller from '../../rest.controllers';
import Sys from '../../../system/index';

dotenv.config();

const { Auth, Validator } = Sys;

class AuthRouter {
  public router: Router = Router();

  constructor() {
    this.initRoute();
  }

  initRoute(): void {
    this.router.post(
      '/auth/signup',
      Validator.User.signup,
      asyncHandler(Auth.Verify.userEmail),
      asyncHandler(Controller.User.create),
    );
    this.router.post(
      '/auth/signup/agent',
      Validator.User.signupAgent,
      asyncHandler(Auth.Verify.agentUserEmail),
      asyncHandler(Controller.UserAgent.create),
    );
    this.router.post(
      '/auth/login/agent',
      Validator.User.loginAgent,
      asyncHandler(Controller.UserAgent.login),
    );
  }
}

export const auth = new AuthRouter().router;
