import express from 'express'
import { registerUser,loginUser,logoutUser, getMe, getAllUsers, updateUserRole, deleteUser } from '../controllers/user.controller.js';
import { homePage  } from '../controllers/homepage.controller.js';
import { isAdmin, verifyToken } from '../middlewares/auth.middlewares.js';

const userRoutes = express.Router();

userRoutes.route('/').get(homePage);
userRoutes.route('/sign-up').post(registerUser);
userRoutes.route('/login').post(loginUser);
userRoutes.route('/logout').post(logoutUser);
userRoutes.route('/get-me').get(verifyToken, getMe);
userRoutes.route('/all').get(verifyToken, isAdmin, getAllUsers);
userRoutes.route('/:id/role').patch(verifyToken, isAdmin, updateUserRole);
userRoutes.route('/:id').delete(verifyToken, isAdmin, deleteUser);


export default userRoutes;