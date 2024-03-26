import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Database Connection
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Connected to Database');
})
.catch((err) => {
    console.log(err)
})

//MiddleWares
const app = express();


const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
