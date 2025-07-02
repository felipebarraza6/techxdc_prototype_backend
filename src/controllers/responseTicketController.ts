import { Request, Response } from "express";
import {
  createResponseTicket,
  getAllResponseTickets,
  getResponseTicketById,
  updateResponseTicket,
  deleteResponseTicket,
} from "../services/responseTicketService";
import { ApiResponse } from "../types/apiTypes";
import { formatError } from "../utils/formatError";

export const create = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const responseTicket = await createResponseTicket(req.body);
    res.status(201).json({
      success: true,
      message: "Respuesta creada exitosamente",
      data: responseTicket,
    });
  } catch (error) {
    console.error("🚨 Error al crear respuesta:", error);
    res.status(500).json({
      success: false,
      message: "Error al crear respuesta",
      error: formatError(error)
    });
  }
};

export const getAll = async (_req: Request, res: Response<ApiResponse>) => {
  try {
    const responses = await getAllResponseTickets();
    return res.status(200).json({
      success: true,
      message: "Respuestas obtenidas exitosamente",
      data: responses,
    });
  } catch (error) {
    console.error("🚨 Error al obtener respuestas:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener respuestas",
      error: formatError(error)
    });
  }
};

export const getById = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const response = await getResponseTicketById(Number(req.params.id));
    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Respuesta no encontrada",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Respuesta obtenida exitosamente",
      data: response,
    });
  } catch (error) {
    console.error("🚨 Error al buscar respuesta:", error);
    res.status(500).json({
      success: false,
      message: "Error al buscar respuesta",
      error: formatError(error)
    });
  }
};

export const update = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const updated = await updateResponseTicket(Number(req.params.id), req.body);
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Respuesta no encontrada para actualizar",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Respuesta actualizada exitosamente",
      data: updated,
    });
  } catch (error) {
    console.error("🚨 Error al actualizar respuesta:", error);
    res.status(500).json({
      success: false,
      message: "Error al actualizar respuesta",
      error: formatError(error)
    });
  }
};

export const remove = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const deleted = await deleteResponseTicket(Number(req.params.id));
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Respuesta no encontrada para eliminar",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Respuesta eliminada exitosamente"
    });
  } catch (error) {
    console.error("🚨 Error al eliminar respuesta:", error);
    res.status(500).json({
      success: false,
      message: "Error al eliminar respuesta",
      error: formatError(error)
    });
  }
};
