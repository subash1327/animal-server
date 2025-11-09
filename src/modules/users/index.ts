import { Router } from 'express';
import { db } from '../../db';

export const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
  const users = await db('users').select('*');
  res.json(users);
});

usersRouter.post('/', async (req, res) => {
  const { first_name, last_name, email } = req.body;
  const [user] = await db('users').insert({ first_name, last_name, email }).returning('*');
  res.status(201).json(user);
});

usersRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await db('users').where({ id }).first();
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

usersRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email } = req.body;
  const [user] = await db('users').where({ id }).update({ first_name, last_name, email }).returning('*');
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

usersRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedCount = await db('users').where({ id }).del();
  if (deletedCount === 0) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(204).send();
});

