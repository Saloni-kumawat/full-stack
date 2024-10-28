//require('dotenv').config(path: './env') yehtarika he dotenv import karne ka prr consistency maintain karne ke liye code mein hum import statement ka use kar rhe he jisko  alag se config bhi karna padega line 5 to 6 mein kiya he 
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()