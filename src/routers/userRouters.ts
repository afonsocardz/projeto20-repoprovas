import {Router} from 'express';
import { createUser, login } from '../controllers/userController';
import validateSchema from '../middlewares/validateSchemaMiddleware';
import { UserSchema } from '../schemas/User';

const router = Router();

router.post('/signup', validateSchema(UserSchema), createUser);
router.post('/login', login);

export default router;