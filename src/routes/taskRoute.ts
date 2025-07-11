import { Router } from "express";
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask, getTasksByStatus } from "../controllers/taskController";
import { authenticateToken } from '../middlewares/authMiddleware';

const taskRouter = Router();

taskRouter.get("/", authenticateToken, getAllTasks);
taskRouter.get("/:id", authenticateToken, getTaskById);
taskRouter.post("/", authenticateToken, createTask);
taskRouter.put("/:id", authenticateToken, updateTask);
taskRouter.delete("/:id", authenticateToken, deleteTask);
taskRouter.get("/status/:status", authenticateToken, getTasksByStatus);

export default taskRouter;