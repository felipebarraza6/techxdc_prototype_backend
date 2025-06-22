import { Request, Response } from "express";
import { FinanceMovementService } from "../services/financeMovementeService";
import { ApiResponse } from '../types/apiTypes';
import { CreateFinanceMovementRequest } from '../types/financeMovementTypes';

export const getAllFinanceMovement = async (_req: Request, res: Response<ApiResponse>) => {
    try {
        const financeMovement = await FinanceMovementService.getAllFinanceMovement();
        return res.status(200).json({
            success: true,
            message: "Movimientos Financieros obtenidos exitosamente",
            data: financeMovement
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener Movimientos Financieros",
            error: error.message
        });
    }
};

export const getFinanceMovementById = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const financeMovement = await FinanceMovementService.getFinanceMovementById(id);
        if (!financeMovement) {
            return res.status(404).json({
                success: false,
                message: "Movimiento Financiero no encontrado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Movimiento Financiero obtenido exitosamente",
            data: financeMovement
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener Movimiento Financiero",
            error: error.message
        });
    }
};

export const createFinanceMovement = async (req: Request<{}, {}, CreateFinanceMovementRequest>, res: Response<ApiResponse>) => {
    try {
        const newFinanceMovement = await FinanceMovementService.createFinanceMovement(req.body);
        return res.status(201).json({
            success: true,
            message: "Movimiento Financiero creado exitosamente",
            data: newFinanceMovement
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al crear Movimiento Financiero",
            error: error.message
        });
    }
};

export const updateFinanceMovement = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const updatedFinanceMovement = await FinanceMovementService.updateFinanceMovement(id, req.body);
        if (!updatedFinanceMovement) {
            return res.status(404).json({
                success: false,
                message: "Movimiento Financiero No Actualizado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Movimiento Financiero actualizado exitosamente",
            data: updatedFinanceMovement
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar Movimiento Financiero",
            error: error.message
        });
    }
};

export const deleteFinanceMovement = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const deletedFinanceMovement = await FinanceMovementService.deleteFinanceMovement(id);
        if (!deletedFinanceMovement) {
            return res.status(404).json({
                success: false,
                message: "Movimiento Financiero no Pudo Ser Eliminado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Movimiento Financiero eliminado exitosamente",
            data: deletedFinanceMovement
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar Movimiento Financiero",
            error: error.message
        });
    }
};