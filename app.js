import express from 'express';
import { PORT } from './config/env.js';
import authRouter from './Routes/auth.routes.js';
import userRouter from './Routes/user.routes.js';
import subscriptionRouter from './Routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';

const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

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
