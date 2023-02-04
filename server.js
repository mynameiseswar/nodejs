import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user-routes'
dotenv.config();
const app = express();
app.use(express.json())
const PROT  = process.env.PORT;
app.use('/api/v1',userRoutes);

app.listen(PROT, (req,res)=>{
  console.log(`Application is running port is ${PROT}`)
})



