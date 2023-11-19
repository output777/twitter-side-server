import {Router} from 'express';
import {TweetsController} from '../controllers';

const router = Router();
const tweetsController = new TweetsController();

// 각 액션별 라우트를 정의
router.get('/', tweetsController.getTweets);
router.get('/:tweetId', tweetsController.getTweetsById);
router.post('/', tweetsController.createTweet);
router.delete('/:tweetId', tweetsController.deleteTweet);
router.put('/:tweetId', tweetsController.updateTweet);

export default router;
