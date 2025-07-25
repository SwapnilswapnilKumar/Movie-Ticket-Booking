import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', ()=>console.log('Database is  Connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}/cinemacloud`);
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;

