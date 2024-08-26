import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kitchan:kitchan0123@cluster0.g2gli.mongodb.net/kitchan')
        .then(() => console.log('DB Connected'));
}