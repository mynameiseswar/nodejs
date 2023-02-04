import mysql from 'mysql2';
import { DBConfiguration } from './db-properties';
import express from 'express';

const app = express();

/* app.use((err,req,res,next)=>{
  console.log(err.stack);
  res.stack(500).json({message: 'Internal server Error.'});
}) */
 export const query = async (query, params) =>{
  let result;
  try{
  const pool = await mysql.createConnection(DBConfiguration).promise();
  result = pool.execute(query,params);
  }catch(err){
    console.log(err);
  }
  return result;
}
