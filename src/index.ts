import PgSimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import pino from 'pino';
import { postgraphile } from 'postgraphile';
import { pgPool } from './db';
import { router } from './router';
import { config } from './config/config';

const app = express();
const logger = pino({
  transport: {
    target: 'pino-pretty',
  },
});

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  postgraphile(pgPool, config.postgraphile.schema, {
    watchPg: config.postgraphile.watch,
    graphiql: config.postgraphile.graphiql,
    enhanceGraphiql: config.postgraphile.enhanceGraphiql,
    appendPlugins: [PgSimplifyInflectorPlugin],
    ownerConnectionString: config.postgraphile.ownerConnectionString,
  }),
);

app.use('/api/v1', router);

app.listen(config.app.port, () => {
  logger.info(`Server is running on port ${config.app.port}`);
});
