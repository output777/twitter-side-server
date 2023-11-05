import {Request, Response} from 'express';

export class HomeController {
  public getHome(req: Request, res: Response) {
    res.send('Hello World!!!!');
  }
}
