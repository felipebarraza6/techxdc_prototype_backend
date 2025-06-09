import { Request, Response } from "express";
import { GroupService } from "../services/groupService";
import { ApiResponse } from '../types/apiTypes';
import { CreateGroupRequest } from '../types/groupTypes';

export const getAllGroups = async (_req: Request, res: Response<ApiResponse>) => {
    try {
        const groups = await GroupService.getAllGroups();
        return res.status(200).json({
            success: true,
            message: "Grupos obtenidos exitosamente",
            data: groups
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener los grupos",
            error: error.message
        });
    }
};

export const getGroupById = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const group = await GroupService.getGroupById(id);
        if (!group) {
            return res.status(404).json({
                success: false,
                message: "Grupo no encontrado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Grupo obtenido exitosamente",
            data: group
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener el grupo",
            error: error.message
        });
    }
};

export const createGroup = async (req: Request<{}, {}, CreateGroupRequest>, res: Response<ApiResponse>) => {
    try {
        const newGroup = await GroupService.createGroup(req.body);
        return res.status(201).json({
            success: true,
            message: "Grupo creado exitosamente",
            data: newGroup
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al crear el grupo",
            error: error.message
        });
    }
};

export const updateGroup = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const updatedGroup = await GroupService.updateGroup(id, req.body);
        if (!updatedGroup) {
            return res.status(404).json({
                success: false,
                message: "Grupo no encontrado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Grupo actualizado exitosamente",
            data: updatedGroup
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar el grupo",
            error: error.message
        });
    }
};

export const deleteGroup = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const deleteGroup = await GroupService.deleteGroup(id);
        if (!deleteGroup) {
            return res.status(404).json({
                success: false,
                message: "Grupo no encontrado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Grupo eliminado exitosamente",
            data: deleteGroup
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar el grupo",
            error: error.message
        });
    }
};