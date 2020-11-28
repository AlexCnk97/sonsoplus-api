import express, {json} from 'express';
import morgan from 'morgan'
import path from 'path'
//Routes
import mainRoutes from './routes/index'
import userRoutes from './routes/users';


const app = express();

//settings
app.set('views', './src/views');
app.set('view engine', 'ejs')

//middlewares
app.use(morgan('dev'));
app.use(json());


app.use('/api/users',userRoutes);


//home route
app.use('/', mainRoutes)


export default app;