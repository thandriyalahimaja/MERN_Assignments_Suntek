//userModel.js
import { Schema, model } from "mongoose";
/*const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product',
    },
})*/

const cartSchema = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product',
        required:true,
    },
    quantity:{
        type:Number,
        default:1, // Set initial quantity to 1
    }
});

const UserSchema = new Schema(
  {
    name: { 
        type: String,
        required: [true, "Name is required"] 
    },
        email: { 
            type: String,
            required: [true, "Email is required"],
            unique: [true,"duplicate user" ],//add to index
        },
    password: {
        type: String,
        required: [true, "Password is required"] 
    },
    cart:{
        type:[cartSchema],
    }
  },
  {
    strict: "throw",
    timestamps: true,
    versionKey: false
  }
);

export const userModel = model("user", UserSchema);