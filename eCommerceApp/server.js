//server.js
import exp from 'express'
import {connect} from 'mongoose'
import {userApp} from './APIs/userApi.js'
import {productApp} from './APIs/productApi.js'
//create HTTP server
const app = exp();
const port=4000

// Async function to establish MongoDB connection
async function connectToDB(){
    try{
        // Connect to MongoDB database
        await connect('mongodb://localhost:27017/eCommerceDB');
        console.log('Connected to MongoDB database');
        
        // Start the server after successful database connection
        app.listen(port,()=>{
            console.log('Server is running on port 4000');
        });
    }catch(err){
        console.error('Failed to connect to MongoDB',err);
    }
}

// Call the connectToDB function to initialize server
connectToDB();

// Middleware to parse incoming JSON requests
app.use(exp.json());

// Route handlers for specific APIs
app.use("/user-api",userApp);
app.use("/product-api",productApp);


//error handling middleware
app.use((err,req,res,next)=>{
    console.error(err.stack);
   res.json({message:err.message});
});


