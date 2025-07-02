import { Request, Response } from "express";
import { ComunaService } from "../services/comunaService";
import { ApiResponse } from '../types/apiTypes';
import { CreateComunaRequest } from '../types/comunaTypes';
import { formatError } from "../utils/formatError";

export const getAllComuna = async (_req: Request, res: Response<ApiResponse>) => {
    try {
        const comuna = await ComunaService.getAllComuna();
        return res.status(200).json({
            success: true,
            message: "Comunas obtenidas exitosamente",
            data: comuna
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener Comunas",
            error: formatError(error)
        });
    }
};

export const getComunaById = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const comuna = await ComunaService.getComunaById(id);
        if (!comuna) {
            return res.status(404).json({
                success: false,
                message: "Comuna no encontrada"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Comuna obtenida exitosamente",
            data: comuna
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener la Comuna",
            error: formatError(error)
        });
    }
};

export const createComuna = async (req: Request<{}, {}, CreateComunaRequest>, res: Response<ApiResponse>) => {
    try {
        const newComuna = await ComunaService.createComuna(req.body);
        return res.status(201).json({
            success: true,
            message: "Comuna creada exitosamente",
            data: newComuna
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al crear Comuna",
            error: formatError(error)
        });
    }
};

export const updateComuna = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const updatedComuna = await ComunaService.updateComuna(id, req.body);
        if (!updatedComuna) {
            return res.status(404).json({
                success: false,
                message: "Comuna no actualizada"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Comuna actualizada exitosamente",
            data: updatedComuna
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar Comuna",
            error: formatError(error)
        });
    }
};

export const deleteComuna = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const deletedComuna = await ComunaService.deleteComuna(id);
        if (!deletedComuna) {
            return res.status(404).json({
                success: false,
                message: "Comuna no pudo ser eliminada"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Comuna eliminada exitosamente",
            data: deletedComuna
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar Comuna",
            error: formatError(error)
        });
    }
};