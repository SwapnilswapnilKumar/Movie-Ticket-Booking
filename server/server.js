import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import showRouter from './routes/showRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';
import userRouter from './routes/userRoutes.js';
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
import { stripeWebhooks } from './controllers/stripeWebhooks.js'

await connectDB();



const app = express();
app.use(cors());


app.use('/api/stripe', express.raw({type: 'application/json'}), stripeWebhooks)

app.use(express.json());

app.use(clerkMiddleware());

app.get('/', (req, res) => res.send('Server is Live!'));
app.use("/api/inngest", serve({ client: inngest, functions }));


app.use('/api/show', showRouter);
app.use('/api/booking', bookingRouter);
app.use('/api/user', userRouter);


const PORT = 3000;
app.listen(PORT, () => console.log(`Server Listening at http://localhost:${PORT}`));
