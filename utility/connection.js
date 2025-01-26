import mongoose from 'mongoose';

const connectDB=async ()=>{
    try {
        await mongoose.connect(`${process.env.MongoDB_URI}/${process.env.MongoDB_NAME}`);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    }
}
export default connectDB;