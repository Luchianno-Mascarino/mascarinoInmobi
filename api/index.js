import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js'
import authRouter from './routes/authRouter.js'
import listingRouter from './routes/listingRouter.js'
import cookieParser from "cookie-parser";
import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to Mongo db');
}).catch((err) => {
    console.log(err);
});


  const __dirname = path.resolve();    


const app = express();




app.use(express.json())

app.use(cookieParser());

app.listen(3000, () => {
    console.log("Server is running on 3000!!"); 
} );

app.use("/api/user", userRouter)
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'client', 'dist', 'index.html'));
})

//Middleware to handle errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})