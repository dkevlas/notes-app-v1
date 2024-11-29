import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { config } from './config.js';
import cookieParser from 'cookie-parser'

//Middlewares
import { handlerError } from './middlewares/handlerError.js';
//Routes
import AccountRoutes from './routes/Accounts.routes.js';
import RegisterRoutes from './routes/Register.routes.js';
import LoginRoutes from './routes/Login.routes.js';
import TasksRoutes from './routes/Tasks.routes.js';
import { verifyToken } from './middlewares/verifyToken.js';
import SessionRoutes from './routes/Session.routes.js';
import { notFound } from './middlewares/notFound.js';

const app = express();

app.use(cors({
    credentials: true,
    origin: config.URL_FRONTEND,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    
}));
app.use(cookieParser());
app.use(json());
app.use(morgan('dev'));


app.use('/api/account', AccountRoutes);
app.use('/api/register', RegisterRoutes);
app.use('/api/login', LoginRoutes);
app.use('/api/tasks', verifyToken, TasksRoutes);
app.use('/api/session', SessionRoutes);

app.use(notFound)
app.use(handlerError);

export default app;
