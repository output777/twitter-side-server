import express, {Express, NextFunction, Request, Response} from 'express';
import helmet from 'helmet';
import cors from 'cors';
import tweetsRoutes from './router/tweetsRouter';
import morgan from 'morgan';
import 'express-async-errors';

const app: Express = express();
app.use(cors());

app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/tweets', tweetsRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.sendStatus(500);
});

const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
