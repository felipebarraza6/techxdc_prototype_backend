import { Router } from "express";
import { getAllFiles, getFileById, createFile, updateFile, deleteFile } from "../controllers/fileController";
import { authenticateToken } from '../middlewares/authMiddleware';

const fileRouter = Router();

fileRouter.get("/", authenticateToken, getAllFiles);
fileRouter.get("/:id", authenticateToken, getFileById);
fileRouter.post("/", authenticateToken, createFile);
fileRouter.put("/:id", authenticateToken, updateFile);
fileRouter.delete("/:id", authenticateToken, deleteFile);

export default fileRouter;