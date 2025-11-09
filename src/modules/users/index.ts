import { Router } from 'express';
import { pgPool } from '../../db';

export const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
  const { rows } = await pgPool.query('SELECT * FROM users');
  res.json(rows);
});
