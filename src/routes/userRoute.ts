import { Router } from "express";
import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/userController";
import { authenticateToken } from '../middlewares/authMiddleware';
const userRouter = Router();

userRouter.get("/", authenticateToken, getUsers);
userRouter.get("/:id", authenticateToken, getUserById);
userRouter.post("/", createUser);
userRouter.put("/:id", authenticateToken, updateUser);
userRouter.delete("/:id", authenticateToken, deleteUser);

export default userRouter;