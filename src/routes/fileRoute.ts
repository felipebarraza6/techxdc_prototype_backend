import { Router } from "express";
import { getAllFiles, getFileById, createFile, updateFile, deleteFile } from "../controllers/fileController";

const fileRouter = Router();

fileRouter.get("/", getAllFiles);
fileRouter.get("/:id", getFileById);
fileRouter.post("/", createFile);
fileRouter.put("/:id", updateFile);
fileRouter.delete("/:id", deleteFile);

export default fileRouter; 