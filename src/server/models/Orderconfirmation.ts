import mongoose from "mongoose";

const OrderConfirmationSchema = new mongoose.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"buyerDetails",
        required: true
    },
    seller : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sellerDetails",
        required : true
    },
    material : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "materialdetails",
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
})

const OrderConfirmationModel = mongoose.model('orderConfirmation', OrderConfirmationSchema);

export default OrderConfirmationModel;