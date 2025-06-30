import { Request, Response } from "express";
import { CatchmentPointService } from "../services/catchmentPointService";
import { ApiResponse } from '../types/apiTypes';
import { CreateCatchmentPointRequest } from '../types/catchmentPointTypes';
import { formatError } from "../utils/formatError";

export const getAllCatchmentPoint = async (_req: Request, res: Response<ApiResponse>) => {
    try {
        const catchmentPoint = await CatchmentPointService.getAllCatchmentPoint();
        return res.status(200).json({
            success: true,
            message: "Puntos de Captacion obtenidos exitosamente",
            data: catchmentPoint
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener Puntos de Captacion",
            error: formatError(error)
        });
    }
};

export const getCatchmentPointById = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const catchmentPoint = await CatchmentPointService.getCatchmentPointById(id);
        if (!catchmentPoint) {
            return res.status(404).json({
                success: false,
                message: "Punto de Captacion no encontrado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Punto de Captacion obtenido exitosamente",
            data: catchmentPoint
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener Puntos de Captacion",
            error: formatError(error)
        });
    }
};

export const createCatchmentPoint = async (req: Request<{}, {}, CreateCatchmentPointRequest>, res: Response<ApiResponse>) => {
    try {
        const newCatchmentPoint = await CatchmentPointService.createCatchmentPoint(req.body);
        return res.status(201).json({
            success: true,
            message: "Punto de Captacion creado exitosamente",
            data: newCatchmentPoint
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al crear Puntos de Captacion",
            error: formatError(error)
        });
    }
};

export const updateCatchmentPoint = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const updatedCatchmentPoint = await CatchmentPointService.updateCatchmentPoint(id, req.body);
        if (!updatedCatchmentPoint) {
            return res.status(404).json({
                success: false,
                message: "Punto de Captacion No Actualizado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Punto de Captacion actualizado exitosamente",
            data: updatedCatchmentPoint
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar Punto de Captacion",
            error: formatError(error)
        });
    }
};

export const deleteCatchmentPoint = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const deletedCatchmentPoint = await CatchmentPointService.deleteCatchmentPoint(id);
        if (!deletedCatchmentPoint) {
            return res.status(404).json({
                success: false,
                message: "Punto de Captacion no Pudo Ser Eliminado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Punto de Captacion eliminado exitosamente",
            data: deletedCatchmentPoint
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar Punto de Captacion",
            error: formatError(error)
        });
    }
};