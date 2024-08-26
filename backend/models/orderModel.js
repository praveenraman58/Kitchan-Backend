import mongoose from 'mongoose';


const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    address: {
        firstname: String,
        lastname: String,
        email: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,
        phone: String
    },
    items: [{
        name: String,
        description: String,
        price: Number,
        image: String,
        category: String,
        quantity: Number
    }],
    status: { type: String, default: "food processing" },
    date: { type: Date, default: Date.now }, // Changed to Date.now function
    payment: { type: Boolean, default: false }
});

const orderModel = mongoose.model.order || mongoose.model("order", orderSchema);


export default orderModel;
