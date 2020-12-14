import request from 'supertest';
import app from '../../index';

import db from '../../../database/definitions/models';
import {
  HTTP_CREATED,
  HTTP_EXIST,
} from '../../../core/constants/httpStatusCodes.ts';

import { userData } from '../../mocks/dummyData';
import { urlPrefix } from '../../mocks/variables';

describe('User Creation Test', () => {
  test('Should create a user', done => {
    request(app)
      .post(`${urlPrefix}/auth/signup`)
      .send(userData)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.status).toBe(HTTP_CREATED);
        expect(res.body.message).toBe('User registered successfully');
        expect(res.body.data).toHaveProperty('token');
        done();
      });
  });

  test('Should fail to create user with the same email', done => {
    request(app)
      .post(`${urlPrefix}/auth/signup`)
      .send(userData)
      .end((err, res) => {
        if (err) done(err);
        console.log('data', res.body);
        expect(res.body.status).toBe(HTTP_EXIST);
        expect(res.body.error).toBe('User already registered');
        done();
      });
  });
});

afterAll(async () => {
  db.Default.destroy({
    where: {},
    truncate: true,
  });
});
