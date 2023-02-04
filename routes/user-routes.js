import express from 'express';
import {getAllUsers, getUserById, updateUserById } from '../controllers/user-controller'
const userRoutes = express.Router();

userRoutes.get("/users", getAllUsers);
userRoutes.get("/users/:id", getUserById);
userRoutes.post("/updateUserById/:id", updateUserById)

export default userRoutes;