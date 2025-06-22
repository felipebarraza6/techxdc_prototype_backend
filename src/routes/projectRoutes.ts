import { Router } from "express";
import { createProject, deleteProject, getAllProjects, getProjectById, updateProject } 
from "../controllers/projectController";

const projectRouter = Router();

projectRouter.get("/", getAllProjects);
projectRouter.get("/:id", getProjectById);
projectRouter.post("/", createProject);
projectRouter.put("/:id", updateProject);
projectRouter.delete("/:id", deleteProject);

export default projectRouter;