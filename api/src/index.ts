import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

import gameRoutes from './routes/games';
import igdbRoutes from './routes/igdb'

const app: Express = express();
const port = process.env.PORT;

app.use(cors())
app.use('/games', gameRoutes);
app.use('/igdb', igdbRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});