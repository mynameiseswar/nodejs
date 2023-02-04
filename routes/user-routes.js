import express from 'express';
import {
  getAllUsers,
  getUserById,
  updateUserById,
  onUploadFile,
  onUserLogin
} from '../controllers/user-controller'
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
const userRoutes = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
/* const uploads = multer({
  dest: __dirname+'/uploads',
}); */

const storage = multer.diskStorage({
  destination:(req,file, callback)=>{
    callback(null,__dirname+'/uploads');
  },
  filename: (req, file, callback)=>{
    callback(null, file.originalname);
  }
});
const uploads = multer({storage: storage})

userRoutes.post('/login',onUserLogin);
userRoutes.get("/users", getAllUsers);
userRoutes.get("/users/:id", getUserById);
userRoutes.post("/updateUserById/:id", updateUserById);
userRoutes.post('/upload', uploads.array('files'),onUploadFile);
//userRoutes.post('/upload', uploads.none(),onUploadFile);

export default userRoutes;