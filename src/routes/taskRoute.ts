import { Router } from "express";
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask, getTasksByStatus } from "../controllers/taskController";

const taskRouter = Router();

taskRouter.get("/", getAllTasks);
taskRouter.get("/:id", getTaskById);
taskRouter.post("/", createTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);
taskRouter.get("/status/:status", getTasksByStatus);

export default taskRouter;