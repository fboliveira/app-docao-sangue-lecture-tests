import { Router } from "express";
import { LoginUserController } from "../controller/users/LoginUserController.js";
import { ValidateUserController } from "../controller/users/ValidateUserController.js";

import { CreateUserController } from "../controller/users/CreateUserController.js"

const userRouter = Router();

const createUserController = new CreateUserController();
const loginUsersController = new LoginUserController();
const validateUserController = new ValidateUserController();

userRouter.post('/users', createUserController.handle);
userRouter.post('/users/login', loginUsersController.handle);
userRouter.post('/users/validate', validateUserController.handle);

export { userRouter }
