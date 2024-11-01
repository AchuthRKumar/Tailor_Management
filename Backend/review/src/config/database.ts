import mongoose from 'mongoose';

const mongoURI = 'mongodb://127.0.0.1:27017/Review';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to DB');
    } catch (error) {
        console.error("MongoDB connection error: ", error);
        process.exit(1);
    }
};

export default connectDB;