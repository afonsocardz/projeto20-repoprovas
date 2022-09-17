import express, {json} from 'express'; 
import 'express-async-errors';
import cors from 'cors';
import router from './routers';
import { errorHandler } from './middlewares/errorHandlingMiddleware';

const app = express();
app.use(json());
app.use(cors());

app.use(router);
app.use(errorHandler);

export default app;