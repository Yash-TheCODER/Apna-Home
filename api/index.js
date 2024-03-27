import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

// Database Connection
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Database Connected SuccessFully');
})
.catch((err) => {
    console.log(err)
})

//MiddleWares
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);