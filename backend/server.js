import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';

//Authentication
import loginRoutes from './routes/loginRoutes.js';
import SignupRoutes from './routes/SignupRoutes.js';


const app = express();
const port = 5000;
connectDB();



app.use(cors()); 
app.use(express.json());
app.use('/api/login', loginRoutes);
app.use('/api/signup', SignupRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
