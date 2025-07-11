import { Router } from "express";
import { getAllGroups, getGroupById, createGroup, updateGroup, deleteGroup } from "../controllers/groupController";
import { authenticateToken } from '../middlewares/authMiddleware';

const groupRouter = Router();

groupRouter.get("/", authenticateToken, getAllGroups);
groupRouter.get("/:id", authenticateToken, getGroupById);
groupRouter.post("/", authenticateToken, createGroup);
groupRouter.put("/:id", authenticateToken, updateGroup);
groupRouter.delete("/:id", authenticateToken, deleteGroup);

export default groupRouter;