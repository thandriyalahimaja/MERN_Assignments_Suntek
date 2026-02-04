//productModel.js
//userModel.js
import { Schema,model } from "mongoose";


//create user schema (username,password,age)
 const productSchema=new Schema({
    productname:{
        type:String,
        required:[true,"product name is required"],
        minLength:[6,"min length should be 6"],
        maxLength:[30,"max length should be 10"]
    },
    modelname:{
        type:String,
        required:[true,"model name is required"],

    },
    price:{
        type:Number,
        required:[true,"price is required"],
    },
},{
    strict:"throw",
    timestamps:true
});

//create user model with the schema

export const productModel=model("product",productSchema);
