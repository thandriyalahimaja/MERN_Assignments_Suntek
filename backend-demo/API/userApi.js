//userApi.js
import exp from 'express'
import {UserModel} from '../model/userModel.js'
import{hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js';
export const userApp = exp.Router();

//user api routes


//create users
userApp.post('/users', async (req, res) => {
    try {
        // get newuser from req
        let newUser = req.body;
        console.log(newUser);
        //hash the password before saving 
        let hashedPassword=await hash(newUser.password,12);
        //replace plain password with hashed password
        newUser.password=hashedPassword;
        // create new user document
        let newUserDoc = new UserModel(newUser);
        console.log(newUserDoc);
        // save to db
        await newUserDoc.save();
        // send response
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.error('Error creating user:', err);
        // send error response
        res.status(400).json({ message: "User creation failed", error: err.message });
    }
});
//user authentication(login)req
userApp.post('/auth',async (req,res)=>{
    //get user cred obj
    let userCred=req.body;
    //check for username
    let userOfDB=await UserModel.findOne({username:userCred.username});
    //if username not found
    if(userOfDB===null){
        return res.status(404).json({message:"Invalid username "})
    }
    //compare passwords
    let status=await compare(userCred.password,userOfDB.password);
    //if password not match
    if(status===false){
        return res.status(401).json({message:"Invalid password"})
    }
    //if password match
    //creaate signed token
    let signedToken=jwt.sign({username:userCred.username},'secretkey48',{expiresIn:30})
    //send token response
    //res.status(200).json({message:"login success",token:signedToken});
    //save token as httpOnly cookie
    res.cookie('token',signedToken,{
        httpOnly:true,//it is http only cookie
        secure:false,//set to true if using https
        sameSite:"lax"//lax provides moderate protection ,none is no restriction,strict is tight protection
    })
    res.status(200).json({message:"login success"});

});

//read users
userApp.get('/users',async (req,res)=>{
    //read users from db
    let users=await UserModel.find()//projection
    res.status(200).json({message:"users",users})
})

//read user by objid
userApp.get('/users/:id',async (req,res)=>{
    let objId=req.params.id;
    //find user by id from db
    let userObj=await UserModel.findById({_id:objId});
    res.status(200).json({message:"user",payload:userObj});
})

//update users
userApp.put('/users/:id',async (req,res)=>{
    let objId=req.params.id;
    //get modified user from req body
    let modifiedUser=req.body;
    //update user in db
    let latestUser=await UserModel.findByIdAndUpdate(objId,
        {$set:{...modifiedUser}
        },{new:true,runValidators:true});
    //send response
    res.status(200).json({message:"user updated",payload:latestUser});
})

//delete users
userApp.delete('/users/:id',async (req,res)=>{
    let objId=req.params.id;
    //delete user from db
    let deletedUser=await UserModel.findByIdAndDelete(objId);
    //send response
    res.status(200).json({message:"user removed",payload:deletedUser});
})

//test route with verifyToken middleware
userApp.get('/test',verifyToken, (req, res) => {
    res.json({message:'test route'});
});
