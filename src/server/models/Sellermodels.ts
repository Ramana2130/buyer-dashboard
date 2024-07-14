import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema({
    fullName: {
        type:String,
        required : true
    },
    email: {
        type:String,
        required : true,
        unique: true
    },
    password : {
        type : String,
        required : true
    },
    phoneNumber : {
        type:Number,
        required : true
    },
    address : {
        type:String,
        required : true
    },
    coordinates : {
        type:String
    }
})

const SellerModels = mongoose.model("sellerDetails" , SellerSchema);

export default SellerModels;