import { Router } from "express";
import { LoginUserController } from "../controller/users/LoginUserController.js";
import { ValidateUserController } from "../controller/users/ValidateUserController.js";

const userRouter = Router();

const loginUsersController = new LoginUserController();
const validateUserController = new ValidateUserController();

userRouter.get('/users/login', loginUsersController.handle);
userRouter.post('/users/validate', validateUserController.handle);

export { userRouter }