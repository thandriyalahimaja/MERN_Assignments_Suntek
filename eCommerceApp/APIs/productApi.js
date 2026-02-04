//productApi.js
import exp from 'express'
import {productModel} from '../models/productModel.js'
export const productApp = exp.Router();

// Route to create a new product
productApp.post("/products",async (req,res,next)=>{
    try{
        // Get product data from request body
        let productObj=req.body;
        
        // Create a new product document
        let productDocument=new productModel(productObj);
        
        // Save the product to database
        let savedProduct=await productDocument.save();
        res.status(201).json(savedProduct);
    }catch(err){
        next(err);
    }
})

// Route to retrieve all products from the database
productApp.get("/products", async (req, res, next) => {
    try {
        // Fetch all products from database
        let products = await productModel.find();
        res.json(products);
    } catch(err) {
        next(err);
    }
});

