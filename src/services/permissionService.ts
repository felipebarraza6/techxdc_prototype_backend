import Permission from "../models/Permission";
import { CreatePermissionRequest } from "../types/authTypes";

export const PermissionService = {
    getAllPermissions: async () => {
        return await Permission.findAll();
    },
    getPermissionById: async (id: number) => {
        return await Permission.findByPk(id);
    },
    createPermission: async (permissionData: CreatePermissionRequest) => {
        return await Permission.create(permissionData);
    },
    updatePermission: async (id: number, permissionData: Partial<CreatePermissionRequest>) => {
        const permission = await Permission.findByPk(id);
        if (!permission) {
            throw new Error("Permiso no encontrado");
        }
        return await permission.update(permissionData);
    },
    deletePermission: async (id: number) => {
        const permission = await Permission.findByPk(id);
        if (!permission) {
            throw new Error("Permiso no encontrado");
        }
        return await permission.destroy();
    }
};

