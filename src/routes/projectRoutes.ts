import { Router } from "express";
import { createProject, deleteProject, getAllProjects, getProjectById, updateProject } 
from "../controllers/projectController";
import { authenticateToken } from '../middlewares/authMiddleware';

const projectRouter = Router();

projectRouter.get("/", authenticateToken, getAllProjects);
projectRouter.get("/:id", authenticateToken, getProjectById);
projectRouter.post("/", authenticateToken, createProject);
projectRouter.put("/:id", authenticateToken, updateProject);
projectRouter.delete("/:id", authenticateToken, deleteProject);

export default projectRouter;