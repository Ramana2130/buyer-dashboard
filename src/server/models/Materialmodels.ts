import mongoose from "mongoose";

const MaterialScheme = new mongoose.Schema({
    productName: {
        type: String,
        required : true
    },
    price : {
        type: Number,
        required : true
    },
    description: {
        type: String,
        required : true
    },
    address : {
        type: String,
        required : true
    },
    city : {
        type: String,
        required : true
    },
    state: {
        type: String,
        required : true
    },
    pincode: {
        type: Number,
        required : true
    },
    image: {
        type: String,
        default: ""
    },
    phoneNumber : {
        type: Number,
        required : true
    },
    quantity : {
        type: String,
        required : true
    }
})

const MaterialModels = mongoose.model("materialdetails", MaterialScheme)

export default MaterialModels;