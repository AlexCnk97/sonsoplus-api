import express, {json} from 'express';
import morgan from 'morgan'
import path from 'path'
//Routes
import userRoutes from './routes/users';


const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//settings
app.set('views' , path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/api/users',userRoutes);


//home route
app.use('/', (req, res)=>{
    res.render("index")
})


export default app;