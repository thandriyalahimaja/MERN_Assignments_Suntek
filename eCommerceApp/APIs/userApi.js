//userApi.js
import exp from "express";
import { userModel } from "../models/userModel.js";
import {hash} from "bcryptjs";
import { productModel } from "../models/productModel.js";
export const userApp = exp.Router();

//create user req
userApp.post("/users", async (req, res, next) => {
    let newUser = req.body;
    // run the validators
    await new userModel(newUser).validate()
    
    // Hash the password 
    let hashedPassword = await hash(newUser.password, 10);
    //replace the plain password with hashed password
    newUser.password = hashedPassword;
    
    // Create and save the new user document
    let newUserDocument = new userModel(newUser);
    await newUserDocument.save({ validateBeforeSave: false });//validation are before save
    res.status(201).json({ message: "User created successfully", payload:newUserDocument });    
   
});

//get all users req
userApp.get("/users", async (req, res, next) => {
    try {
        let users = await userModel.find().populate("cart.product");
        res.json(users);
    } catch (err) {
        next(err);
    }
});

//read user by id
userApp.get("/users/:id", async (req, res, next) => {
    try {
        let id = req.params.id;
        // Find user by id
        let userObj = await userModel.findById(id).populate("cart.product");
        if(!userObj){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({message:"user found", payload:userObj});
    } catch(err) {
        next(err);
    }
});

//add product to users cart
userApp.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res, next) => {
    try {
        let {uid, pid} = req.params;
        
        // Check if user exists in the database
        let user = await userModel.findById(uid);
        if(!user){
            return res.status(401).json({message:"User not found"});
        }
        
        // Check if product exists in the database
        let product = await productModel.findById(pid);
        if(!product){
            return res.status(401).json({message:"Product not found"});
        }
        //check if product already in cart
        const productInCart=user.cart.find((item)=>item.product.toString()===pid);
        if(productInCart){
            //if product already in cart, incrment quantity
            productInCart.quantity += 1;;
        }else{
            //if product not in cart, add to cart with quantity 1
            user.cart.push({product:pid,quantity:1});
        }
        let modifiedUser=await user.save();
        // Add product to user's cart using findByIdAndUpdate
        modifiedUser =await userModel.findByIdAndUpdate(
            uid,
            {$push:{cart:{product: pid}}},
            {new: true}
        ).populate("cart.product");
        res.status(200).json({message:"product added to cart", payload:modifiedUser});
    } catch(err) {
        next(err);
    }
});
