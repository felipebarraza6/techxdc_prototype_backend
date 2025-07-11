import { Router } from "express";
import { createPermission, deletePermission, getAllPermissions, getPermissionById, updatePermission } from "../controllers/permissionController";
import { authenticateToken } from '../middlewares/authMiddleware';

const permissionRouter = Router();

permissionRouter.get("/", authenticateToken, getAllPermissions);
permissionRouter.get("/:id", authenticateToken, getPermissionById);
permissionRouter.post("/", authenticateToken, createPermission);
permissionRouter.put("/:id", authenticateToken, updatePermission);
permissionRouter.delete("/:id", authenticateToken, deletePermission);

export default permissionRouter;