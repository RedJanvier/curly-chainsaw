import { Router } from 'express';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import asyncHandler from '../../rest.middlewares/rm.asyncHandler';
import Controller from '../../rest.controllers';
import Sys from '../../../system/index';

dotenv.config();

const {
  BASE_URL,
  FACEBOOK_LOGIN_SCOPE,
  FACEBOOK_BUSINESS_SCOPE,
  PAGE_REDIRECT,
} = process.env;

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
   
  }
}

export const auth = new AuthRouter().router;
