import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js'
import authRouter from './routes/authRouter.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to Mongo db');
}).catch((err) => {
    console.log(err);
});


const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log("Server is running on 3000!!"); 
} );

app.use("/api/user", userRouter)
app.use('/api/auth', authRouter)