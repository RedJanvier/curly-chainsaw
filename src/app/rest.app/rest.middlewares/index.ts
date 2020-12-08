import asyncHandler from './rm.asyncHandler';
import fileHandler from './rm.fileHandler';
import fileUploader from './rm.fileUploader';
import postProvider from './rm.postProvider';
import CommentHandler from './comment/rm.commentHandler';
import Sys from '../../system';
import Helper from '../rest.helpers';
import orderHandler from './order';
import appHandler from './app';
import generateLoginToken from './rm.generateLoginToken';
import paymentHandler from './payment';

const { Utils, Service, Assistance } = Sys;
const { Responses, Notification } = Assistance;

const commentHandler = new CommentHandler(
  Utils,
  Notification,
  Service,
  Responses,
  Helper,
);

const Middleware = {
  asyncHandler,
  fileHandler,
  fileUploader,
  postProvider,
  commentHandler,
  orderHandler,
  appHandler,
  generateLoginToken,
  paymentHandler,
};

export default Middleware;
