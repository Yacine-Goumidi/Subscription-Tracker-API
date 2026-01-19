import express from 'express'
import {PORT} from './config/env.js';
import userRouter from './Routes/user.routes.js';
import authRouter from './Routes/auth.routes.js';
import subscriptionRouter from './Routes/subscription.routes.js';

///api/v1/auth/sign-up

const app = express();
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker API');
});


app.listen(PORT, () => {
    console.log(`Subscription Tracker API is Running on http://localhost:${PORT}`);
});

export default app;