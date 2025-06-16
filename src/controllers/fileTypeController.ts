import { Request, Response } from "express";
import { ApiResponse } from "../types/apiTypes";
import { formatError } from '../utils/formatError';
import { FileTypeService } from "../services/fileTypeService";

export const getAllTypesFiles = async (_req: Request, res: Response<ApiResponse>) => {
    try {
        const types = await FileTypeService.getAllTypeFiles();
        return res.status(200).json({ 
            success: true, 
            message: "Tipos de archivo obtenidos correctamente",
            data: types });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: "Error al obtener los tipos de archivo", 
            error: formatError(error)
        });
    }
};

export const getTypeFileById = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const typeFile = await FileTypeService.getTypeFileById(id);
        if (!typeFile) {
            return res.status(404).json({ 
                success: false, 
                message: "Tipo de archivo no encontrado" 
            });
        }
        return res.status(200).json({ 
            success: true, 
            message: "Tipo de archivo obtenido correctamente", 
            data: typeFile 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: "Error al obtener el tipo de archivo", 
            error: formatError(error)
        });
    }
};

export const createTypeFile = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const newTypeFile = await FileTypeService.createTypeFile(req.body);
        return res.status(201).json({
            success: true, 
            message: "Tipo de archivo creado correctamente",
            data: newTypeFile
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: "Error al crear el tipo de archivo", 
            error: formatError(error)
        });
        
    }
};

export const updateTypeFile = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const updatedTypeFile = await FileTypeService.updateTypeFile(id, req.body);
        return res.status(200).json({
            success: true, 
            message: "Tipo de archivo actualizado correctamente",
            data: updatedTypeFile
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: "Error al actualizar el tipo de archivo", 
            error: formatError(error)
        });
    }
};

export const deleteTypeFile = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        await FileTypeService.deleteTypeFile(id);
        return res.status(200).json({ 
            success: true, 
            message: "Tipo de archivo eliminado correctamente" 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: "Error al eliminar el tipo de archivo", 
            error: formatError(error)
        });
    }
};