import {Router} from 'express';
import {TweetsController} from '../controllers';

const router = Router();
const tweetsController = new TweetsController();

// 각 액션별 라우트를 정의
router.get('/', (req, res) => tweetsController.getAllTweets(req, res));
router.get('/user/:userId', (req, res) => tweetsController.getTweetsByUser(req, res));
router.post('/', (req, res) => tweetsController.createTweet(req, res));
router.delete('/:tweetId', (req, res) => tweetsController.deleteTweet(req, res));
router.put('/:tweetId', (req, res) => tweetsController.editTweet(req, res));

export default router;
