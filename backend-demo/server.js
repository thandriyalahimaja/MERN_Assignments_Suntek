import exp from 'express'
import {userApp} from './API/userApi.js'
import { productApp } from './API/productApi.js'
import { connect } from 'mongoose'
import cookieParser from 'cookie-parser';
const app=exp()

//connect to db server 
async function connectDB(){
    try{
   await connect('mongodb://localhost:27017/anuragdb2')
    console.log("db connection is success");
//assign port
const port=4000;
app.listen(port,()=>console.log("server listening on 4000..."))


    }catch(err){
        console.log("err in db connection",err)
   // .then(()=>console.log("connected to db"))
    //.catch((err)=>console.log("error in the db connection",err))
    }
}
connectDB();

//body patser middleware
app.use(exp.json())
//add cookie parser middleware
app.use(cookieParser());
//if path starts with /userapi,forward req ro userApp
//app.use('/user-api',userApp)


//if path starts with /userapi,forward req ro userApp
app.use('/user-api',userApp)
app.use('/products-api',productApp)


//error handling middleware
//it should be at the end of the server.js file to avoid any other exceptions
/*function errorHandler(err,req,res,next){
    res.json({message:"error",reason:err.message})
}*/

app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",reason:err.message})
});