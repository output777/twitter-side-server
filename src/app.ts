import express, {Express} from 'express';
import cors from 'cors';
import tweetsRoutes from './routes/tweetsRoutes';

const app: Express = express();
app.use(cors());

app.use(express.json());
app.use('/tweets', tweetsRoutes);

const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
