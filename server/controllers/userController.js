import { clerkClient } from "@clerk/express";
import Booking from "../models/Booking.js";
import Movie from "../models/Movie.js";
import User from "../models/User.js";

export const syncUserWithDB = async (req, res) => {
  try {
    const userId  = req.auth().userId;
    console.log("inside sync controller userId: ",userId);

    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const existingUser = await User.findById(userId);
    if (existingUser) {
      return res.status(200).json({ message: "User already exists in DB" });
    }

    const clerkUser = await clerkClient.users.getUser(userId);
    console.log("inside syncYserWithDb: ",clerkUser);
    const newUser = new User({
      _id: clerkUser.id,
      name: `${clerkUser.firstName} ${clerkUser.lastName}`,
      email: clerkUser.emailAddresses[0]?.emailAddress || '',
      image: clerkUser.imageUrl,
    });

    await newUser.save();
    console.log("user created in db newUser: ",newUser);
    return res.status(201).json({ message: "User synced with DB" });

  } catch (error) {
    console.error("Sync Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const getUserBookings = async (req, res) => {
    try {
        const user = req.auth().userId;

        const bookings = await Booking.find({user}).populate({
            path: 'show',
            populate: {path: 'movie'}
        }).sort({createdAt : -1});

        res.json({ success: true, bookings });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}


export const updateFavorite = async (req, res) => {
    try {
        const { movieId } = req.body;
        const {userId} = req.auth();

        const user = await clerkClient.users.getUser(userId);

        if(!user.privateMetadata.favorites){
            user.privateMetadata.favorites = [];
        }

        if(!user.privateMetadata.favorites.includes(movieId)){
            user.privateMetadata.favorites.push(movieId);
        }else{
            user.privateMetadata.favorites = user.privateMetadata.favorites.filter(item => item !== movieId);
        }

        await clerkClient.users.updateUserMetadata(userId, {privateMetadata: user.privateMetadata});

        res.json({ success: true, message: "Favorite Movie updated" });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

export const getFavorites = async (req, res) => {
    
    try {
        const { userId } = req.auth();
        const user = await clerkClient.users.getUser(userId);
        const favorites = user.privateMetadata.favorites;
        const movies = await Movie.find({_id: {$in: favorites}});
        res.json({ success: true, movies });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

export const isUser = async (req, res) => {
        res.json({ success: true});
}