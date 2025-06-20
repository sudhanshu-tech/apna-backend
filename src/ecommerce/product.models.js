import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        default:0,        
    },
    stock:{
        type:Number,
        required:true,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    Owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",        
    }

},{timestamps:true});

export const product = mongoose.model('Product',productSchema);
