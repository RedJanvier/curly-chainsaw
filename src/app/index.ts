import express from 'express';
import port from '../core/utils/port';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';

import router from '../app/rest.app/rest.routes';

const app = express();
const isProd = process.env.NODE_ENV === 'production';
const accessLogStream = fs.createWriteStream('combine.log', { flags: 'a' });

app.use(cors());
app.use(
  morgan(isProd ? 'combined' : 'dev', {
    stream: isProd ? accessLogStream : null,
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

export const onPort = port;
export default app;
