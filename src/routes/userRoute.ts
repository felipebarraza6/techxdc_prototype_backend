import { Router } from "express";
//import { getUser, updateUser } from "../controllers/userController"; 
const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;