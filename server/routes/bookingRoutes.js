import express from 'express';
import { requireAuth } from '@clerk/express';

import { createBooking, getOccupiedSeats } from '../controllers/bookingController.js';
import { protectUser } from '../middleware/auth.js';

const   bookingRouter = express.Router();

bookingRouter.post('/',requireAuth(),protectUser, createBooking);
bookingRouter.get('/seats/:showId', getOccupiedSeats);

export default bookingRouter;