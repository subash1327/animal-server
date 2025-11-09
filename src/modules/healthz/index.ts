import { Router } from 'express';

export const healthzRouter = Router();

healthzRouter.get('/', (req, res) => {
  res.status(200).send('OK');
});
