import express from 'express';
import connectDB from './config/database'; 
import reviewRoutes from './route/ReviewRoutes'; 
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 

connectDB();

app.use('/api/reviews', reviewRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
