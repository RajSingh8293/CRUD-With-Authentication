import express from "express";
import { getUserByIdController, loginController, registerController, usersController, deleteUserByIdController, updateUserByIdController, getCurrentUserController } from "../controllers/user.controller.js";
import { authorizeUser } from "../middleware/auth.middleware.js";

const router = express.Router()


router.get('/users', usersController)
// router.get('/users', authorizeUser, usersController)
router.post('/register', registerController)
router.post('/login', loginController)
router.get('/user/:id', getUserByIdController)
router.delete('/user/:id', authorizeUser, deleteUserByIdController)
router.put('/user/:id', authorizeUser, updateUserByIdController)
router.get('/current-user', getCurrentUserController)


export default router