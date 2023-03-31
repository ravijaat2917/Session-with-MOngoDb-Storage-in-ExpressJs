import mongoose from 'mongoose';

const connectDB = async(DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName : 'schooldb',
        }
        await mongoose.connect(DATABASE_URL , DB_OPTIONS).then(console.log(`Database Connected Successfully...`));
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;