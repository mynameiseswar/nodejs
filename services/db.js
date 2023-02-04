import mysql from 'mysql2';
import { DBConfiguration } from './db-properties';
import express from 'express';
import { HttpError } from 'http-errors';
const app = express();

/* app.use((err,req,res,next)=>{
  console.log(err.stack);
  res.stack(500).json({message: 'Internal server Error.'});
}) */
 export const query = async (query, params,next) =>{
  let result;
  try{
  const pool = await mysql.createPool(DBConfiguration).promise();
  result = pool.execute(query,params);
  }catch(err){
    console.log(err);
    return next(createError(500, 'Internal Server Error'));
  }
  return result;
}
