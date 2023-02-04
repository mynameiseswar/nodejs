// import mysql from 'mysql2';
// import dotenv from 'dotenv';
// dotenv.config();

/* const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
}).promise(); */

// import {DBConnect} from '../db/db-connection'

/* export const getAllUsers = async(req,res,next) =>{
  let result;
  try{
  [result] = await DBConnect.query('select * from users');
  }catch(err){
    console.log(err);
  }
  if(!result){
    res.status(500).json({message: 'Internal Server Error'})
  }
  return res.json(result);
} */

/* export const getUserById = async(req,res,next) =>{
  let result;
  let customerNumber = req.params.id;
  console.log(customerNumber)

  try{
    [result] = await DBConnect.query(`SELECT * FROM customers WHERE customerNumber = ?`, [customerNumber])
  }catch(err){
    console.log(err);
  }

  if(!result){
    res.status(404).json({message: 'User Not found!.'})
  }

  res.status(200).json(result);
  res.status(200).json('');
} */
import {query} from '../services/db';

export const getAllUsers = async (req,res,next) =>{
  let [result] =  await query('SELECT * FROM customers');
  return res.status(200).json({result});
}
export const getUserById = async(req,res,next) =>{
  let customerNumber = req.params.id;
  let [result] = await query(`select * from customers where customerNumber= ?`,[customerNumber]);
  if(!result.length){
    return res.status(404).json({message: 'User Not found!.'});
  }
  return res.status(200).json(result);
}

export const updateUserById =async (req,res,next) =>{
  let {customerName,contactLastName} = req.body;
  let customerNumber = req.params.id;
  let [result] = await query(`UPDATE customers SET customerName = ?, contactLastName = ? WHERE customerNumber = ? `,[customerName,contactLastName,customerNumber]);
  //let [finalResult] = await query(`select * from customers where customerNumber= ?`,[customerNumber]);
  let finalResult = getUserById(req,res,next);
  if(!finalResult){
    return res.status(500).json({message: 'Internal Server Error.'})
  }
  return finalResult;
}




