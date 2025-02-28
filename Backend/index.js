import express, { json } from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import  dotenv from "dotenv";
import userRoute from "./Routes/user.js"
import  authRoute from "./Routes/auth.js"
import  doctorRoute from "./Routes/doctor.js"
import reviewRoute from "./Routes/review.js"
import bookingRoute from "./Routes/booking.js"

dotenv.config();
const app=express()    
const port =process.env.Port || 8000
 

const corsOption=
{
    origin:true,
}


app.get('/',(req,res)=> 
{
    res.send("Api is working")

});

mongoose.set("strictQuery",false)
const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {
        
            
            
        })
        console.log("mongoDB is connected Sucessfully")    }

    catch(err)
    {
        console.log("mongoDb connection failed")
    }
}



// middleware
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data


app.use(cookieParser());
app.use(cors(corsOption));
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/doctors',doctorRoute)
app.use('/api/v1/reviews',reviewRoute)
app.use('/api/v1/bookings',bookingRoute)
app.listen(port,()=>
{ connectDB();
    console.log("Server is running on port "+port);
})