import express from 'express';
import connectDB from './config/database';
import customerRoute from './route/CustomerRoute';
import dotenv from 'dotenv';
import { connect } from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());

connectDB();

app.use('/api/customer', customerRoute);

app.listen( PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
}); 