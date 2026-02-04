//userModel.js
import { Schema,model } from "mongoose";


//create user schema (username,password,age)
 const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[7,"min length should be 7"],
        maxLength:[10,"max length should be 10"]
    },
    password:{
        type:String,
        required:[true,"password is required"],

    },
    age:{
        type:Number,
        required:[true,"age is required"],
        min:[18,"min age should be 18"],
        max:[25,"max age should be 25"],
    },
},{
    strict:"throw",
    timestamps:true
});

//create user model with the schema

export const UserModel=model("user",userSchema);
