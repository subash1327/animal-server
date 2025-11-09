import knex from 'knex';
import knexConfig from '../../knexfile';
import { config }s from '../config/config';

const environment = config.env || 'development';
export const db = knex(knexConfig[environment]);
