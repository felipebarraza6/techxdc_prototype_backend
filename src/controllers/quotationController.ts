import { Request, Response } from "express";
import { QuotationService } from "../services/quotationService";
import { ApiResponse } from '../types/apiTypes';
import { CreateQuotationRequest } from '../types/quotationTypes';
import { formatError } from "../utils/formatError";

export const getAllQuotation = async (_req: Request, res: Response<ApiResponse>) => {
    try {
        const quotation = await QuotationService.getAllQuotation();
        return res.status(200).json({
            success: true,
            message: "Cotizaciones obtenidas exitosamente",
            data: quotation
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener Cotizaciones",
            error: formatError(error)
        });
    }
};

export const getQuotationById = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const quotation = await QuotationService.getQuotationById(id);
        if (!quotation) {
            return res.status(404).json({
                success: false,
                message: "Cotización no encontrada"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Cotización obtenida exitosamente",
            data: quotation
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener Cotización",
            error: formatError(error)
        });
    }
};

export const createQuotation = async (req: Request<{}, {}, CreateQuotationRequest>, res: Response<ApiResponse>) => {
    try {
        const newQuotation = await QuotationService.createQuotation(req.body);
        return res.status(201).json({
            success: true,
            message: "Cotización creada exitosamente",
            data: newQuotation
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al crear Cotización",
            error: formatError(error)
        });
    }
};

export const updateQuotation = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const updatedQuotation = await QuotationService.updateQuotation(id, req.body);
        if (!updatedQuotation) {
            return res.status(404).json({
                success: false,
                message: "Cotización No Actualizada"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Cotización actualizada exitosamente",
            data: updatedQuotation
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar Cotización",
            error: formatError(error)
        });
    }
};

export const deleteQuotation = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const deletedQuotation = await QuotationService.deleteQuotation(id);
        if (!deletedQuotation) {
            return res.status(404).json({
                success: false,
                message: "Cotización no pudo ser eliminada"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Cotización eliminada exitosamente",
            data: deletedQuotation
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar Cotización",
            error: formatError(error)
        });
    }
};