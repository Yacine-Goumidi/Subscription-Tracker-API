import express from 'express';
import cookieParser from 'cookie-parser';
import { PORT } from './config/env.js';
import authRouter from './Routes/auth.routes.js';
import userRouter from './Routes/user.routes.js';
import subscriptionRouter from './Routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import ErrorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use(ErrorMiddleware)

app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker API!');
});

const startServer = async () => {
    try {
        await connectToDatabase();

        app.listen(PORT, () => {
            console.log(
                `🚀 Subscription Tracker API is running on http://localhost:${PORT}`
            );
        });
    } catch (error) {
        console.error('❌ Failed to start server', error);
        process.exit(1);
    }
};

startServer();

export default app;
