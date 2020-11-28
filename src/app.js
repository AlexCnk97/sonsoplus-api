import express, {json} from 'express';
import morgan from 'morgan'

//Routes
import userRoutes from './routes/users';


const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

app.use('/api/users',userRoutes);


export default app;