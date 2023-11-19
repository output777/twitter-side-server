import {NextFunction, Request, Response} from 'express';
import * as tweetData from '../data/data';

export class TweetsController {
  public async getTweets(req: Request, res: Response, next: NextFunction) {
    const username = req.query.username as string;
    const data = await (username ? tweetData.getAll() : tweetData.getByUsername(username));
    return res.status(200).json(data);
  }

  public async getTweetsById(req: Request, res: Response, next: NextFunction) {
    const id = req.params.tweetId;
    const data = await tweetData.getById(id);
    return data
      ? res.status(200).json(data)
      : res.status(404).json({message: `Tweet id${id} not found`});
  }

  public async createTweet(req: Request, res: Response, next: NextFunction) {
    const {text, name, username, url} = req.body;
    const tweet = await tweetData.create({text, name, username, url});
    return res.status(201).json(tweet);
  }

  public async deleteTweet(req: Request, res: Response, next: NextFunction) {
    const id = req.params.tweetId;
    await tweetData.remove(id);
    return res.sendStatus(204);
  }

  public async updateTweet(req: Request, res: Response, next: NextFunction) {
    const id = req.params.tweetId;
    const text = req.body.text;
    const tweet = await tweetData.update({id, text});
    if (tweet) {
      res.status(200).json(tweet);
    } else {
      return res.status(404).json({message: `Tweet id(${id}) not found`});
    }
  }
}
