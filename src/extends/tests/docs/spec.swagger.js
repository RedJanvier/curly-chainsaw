import request from 'supertest';
import app from '../../index';
import {
  HTTP_OK,
  HTTP_NOT_FOUND,
} from '../../../core/constants/httpStatusCodes.ts';
jest.setTimeout(30000);

describe('Test the doc endpoint API', () => {
  test('It should respond with a 200 status', async done => {
    const result = await request(app).get('/api/v1/zplc/doc/');
    expect(result.status).toBe(HTTP_OK);
    done();
  });
});
