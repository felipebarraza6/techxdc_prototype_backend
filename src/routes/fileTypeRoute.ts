import { Router } from "express";
import { getAllTypesFiles, getTypeFileById, createTypeFile, updateTypeFile, deleteTypeFile } from "../controllers/fileTypeController";

const fileTypeRouter = Router();
fileTypeRouter.get("/", getAllTypesFiles);
fileTypeRouter.get("/:id", getTypeFileById);
fileTypeRouter.post("/", createTypeFile);
fileTypeRouter.put("/:id", updateTypeFile);
fileTypeRouter.delete("/:id", deleteTypeFile);

export default fileTypeRouter;