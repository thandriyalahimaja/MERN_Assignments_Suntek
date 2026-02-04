//productApi.js
import exp from 'express'
import {productModel} from '../model/productModel.js'
export const productApp = exp.Router();

//create products
productApp.post('/products',async(req,res)=>{
    try{
        let newProduct=req.body;
        console.log(newProduct)
        //create new product document
        let newProdDoc= new productModel(newProduct)
        console.log(newProdDoc)
        //save to db
        await newProdDoc.save()
        //send response
        res.status(201).json({message:"product created successfully"})
    }catch(err){
        console.error("error creating a product",err)
        //send error response
        res.status(400).json({message:"product creation failed",error:err.message})
    }
});


//read products
productApp.get('/products',async(req,res)=>{
    //get the products from db
    let products=await productModel.find()
    //send response
    res.status(200).json({message:"products",products})
});

//read products by id
productApp.get('./products',async(req,res)=>{
    let objId=req.params.id
    //find product by id from the database
    let prodObj=await productModel.findById(objId)
    res.status(200).json({message:"product",payload:prodObj})
});

//update products by id

productApp.put('/products/:id',async (req,res)=>{
    let objId=req.params.id;
    //get modified user from req body
    let modifiedProduct=req.body;
    //update user in db
    let latestProduct=await productModel.findByIdAndUpdate(objId,
        {$set:{...modifiedProduct}
        },{new:true});
    //send response
    res.status(200).json({message:"product updated",payload:latestProduct});
})


