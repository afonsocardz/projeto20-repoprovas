import {Router} from 'express';
import { validateToken } from '../middlewares/validateTokenMiddleware';
import userRouter from './userRouters';

const router = Router();

router.use(userRouter);
router.use(validateToken);

export default router;