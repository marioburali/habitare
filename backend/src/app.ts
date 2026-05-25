import cors from 'cors';
import express from 'express';
import { condoRouter } from './routes/condo.route.js';

export function App() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/api/condominiums', condoRouter);

  return app;
}
