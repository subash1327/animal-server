import { Pool } from 'pg';
import { config } from '../config/config';

export const pgPool = new Pool(config.db);
