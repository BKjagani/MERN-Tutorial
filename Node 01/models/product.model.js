import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    price : {
        type : Number,
        required : true,
        trim : true
    },
    image : {
        type : String,
        required : true,
        trim : true
    },
}, {timestamps : true})


const Product = mongoose.model("Product", productSchema)
export default Product