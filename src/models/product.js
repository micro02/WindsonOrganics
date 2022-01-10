const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
     name:{
        type:String,
     },
    brand:{
        type:String,
      
    },
    price:{
        type:Number,
    },
    quantity:{
        type:Number,
    },
    stock:{
        type:Number,
       
    },
    details:{
        type:String,
    },
    image:{
         type:String
    },
    review:{
        username:{
        type:String,
        default:null,
    },
    email:{
        type:String,
        default:null,
    },
    comment:{
        type:String,
        default:null,
    }
},
    date:{
        type: Date
    },
}) ;

// creating collection
const productModel = new mongoose.model("product", productSchema);
module.exports= productModel;