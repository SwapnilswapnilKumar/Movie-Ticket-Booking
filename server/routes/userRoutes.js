import express from 'express';
import { getFavorites, getUserBookings, isUser, updateFavorite,syncUserWithDB } from '../controllers/userController.js';
import { protectUser } from '../middleware/auth.js';


const userRouter = express.Router();

userRouter.post('/sync',  syncUserWithDB);
userRouter.get('/is-user', protectUser, isUser);
userRouter.get('/bookings', protectUser,getUserBookings);
userRouter.post('/update-favorite', protectUser, updateFavorite);
userRouter.get('/favorites', protectUser,  getFavorites);

export default userRouter;