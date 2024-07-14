import mongoose from "mongoose";

const BuyerSchema = new mongoose.Schema({
    shopName: {
        type:String,
        required : true
    },
    ShopOwnerName: {
        type:String,
        required : true
    },
    phoneNumber : {
        type:Number,
        required : true
    },
    shopAddress : {
        type:String,
        required : true
    },
    sellerDetails: {
        type: {
            sellerId: mongoose.Schema.Types.ObjectId,
            fullName: String,
            email: String,
            phoneNumber: Number,
            address: String,
            coordinates: String
        }
    }
})

const BuyerModels = mongoose.model("buyerDetails" , BuyerSchema);

export default BuyerModels;