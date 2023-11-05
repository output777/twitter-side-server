import express, {Request, Response} from 'express';
import {HomeController} from './controllers/HomeController';

const app = express();
const homeController = new HomeController();

app.use(express.json());

app.get('/', homeController.getHome);

const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
