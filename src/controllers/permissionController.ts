import { Request, Response } from "express";
import { ApiResponse } from "../types/apiTypes";
import { CreatePermissionRequest } from "../types/authTypes";
import { PermissionService } from "../services/permissionService";

export const getAllPermissions = async (_req: Request, res: Response<ApiResponse>) => {
    try {
        const permissions = await PermissionService.getAllPermissions();
        if (!permissions){
            return res.status(404).json({
                success: false,
                message: "No se encontraron permisos",
            });
        }
        return res.status(200).json({
        success: true,
        message: "Permisos obtenidos correctamente",
        data: permissions,
        });
    } catch (error) {        
        return res.status(500).json({
            success: false,
            message: "Error al obtener los permisos",
            error: error.message,
        });
    }
};

export const getPermissionById = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id  = parseInt(req.params.id);

        const permission = await PermissionService.getPermissionById(id);
        if (!permission) {
            return res.status(404).json({
                success: false,
                message: "Permiso no encontrado",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Permiso obtenido correctamente",
            data: permission,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener el permiso",
            error: error.message,
        });
    }
};

export const createPermission = async (req: Request<{}, {}, CreatePermissionRequest>, res: Response<ApiResponse>) => {
 try {
    const permission = await PermissionService.createPermission(req.body);
    return res.status(201).json({
        success: true,
        message: "Permiso creado correctamente",
        data: permission,
    });
 } catch (error) {
    return res.status(500).json({
        success: false,
        message: "Error al crear el permiso",
        error: error.message,
    });
 }
};

export const updatePermission = async (req: Request<{id: number}, {}, Partial<CreatePermissionRequest>>, res: Response<ApiResponse>) => {
    try {
        const id = (req.params.id);
        const permission = await PermissionService.updatePermission(id, req.body);
        if (!permission) {
            return res.status(404).json({
                success: false,
                message: "Permiso no encontrado",
            });
        }
        await permission.update(req.body);
        return res.status(200).json({
            success: true,
            message: "Permiso actualizado correctamente",
            data: permission,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar el permiso",
            error: error.message,
        });
    }
};

export const deletePermission = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        await PermissionService.deletePermission(id);
        return res.status(200).json({
            success: true,
            message: "Permiso eliminado correctamente",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar el permiso",
            error: error.message,
        });
    }
};