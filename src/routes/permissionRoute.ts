import { Router } from "express";
import { createPermission, deletePermission, getAllPermissions, getPermissionById, updatePermission } from "../controllers/permissionController";

const permissionRouter = Router();

permissionRouter.get("/", getAllPermissions);
permissionRouter.get("/:id", getPermissionById);
permissionRouter.post("/", createPermission);
permissionRouter.put("/:id", updatePermission);
permissionRouter.delete("/:id", deletePermission);

export default permissionRouter;