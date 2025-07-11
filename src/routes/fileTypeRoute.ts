import { Router } from "express";
import { getAllTypesFiles, getTypeFileById, createTypeFile, updateTypeFile, deleteTypeFile } from "../controllers/fileTypeController";
import { authenticateToken } from '../middlewares/authMiddleware';

const fileTypeRouter = Router();
fileTypeRouter.get("/", authenticateToken, getAllTypesFiles);
fileTypeRouter.get("/:id", authenticateToken, getTypeFileById);
fileTypeRouter.post("/", authenticateToken, createTypeFile);
fileTypeRouter.put("/:id", authenticateToken, updateTypeFile);
fileTypeRouter.delete("/:id", authenticateToken, deleteTypeFile);

export default fileTypeRouter;