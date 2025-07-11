import { Request, Response } from "express";
import * as statusTicketService from "../services/statusTicketService";
import {
  CreateStatusTicketRequest,
  UpdateStatusTicketRequest,
} from "../types/statusTicketType";
import { ApiResponse } from "../types/apiTypes";
import { formatError } from "../utils/formatError";

// Crear un nuevo estado de ticket
export const createStatusTicket = async (
  req: Request,
  res: Response<ApiResponse>
) => {
  try {
    const data: CreateStatusTicketRequest = req.body;
    const statusTicket = await statusTicketService.createStatusTicket(data);
    return res.status(201).json({
      success: true,
      message: "Estado de ticket creado exitosamente",
      data: statusTicket,
    });
  } catch (error) {
    console.error("💥 Error stack:", error);
    console.error("Error creating status ticket:", error);
    return res.status(500).json({
      success: false,
      message: "Error al crear estado de ticket",
      error: formatError(error),
    });
  }
};

// Obtener todos los estados de tickets
export const getAllStatusTickets = async (
  _req: Request,
  res: Response<ApiResponse>
) => {
  try {
    const statusTickets = await statusTicketService.getAllStatusTickets();
    return res.status(200).json({
      success: true,
      message: "Estados de tickets obtenidos exitosamente",
      data: statusTickets,
    });
  } catch (error) {
    console.error("Error fetching status tickets:", error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener estados de tickets",
      error: formatError(error),
    });
  }
};

// Obtener un estado de ticket por ID
export const getStatusTicketById = async (
  req: Request,
  res: Response<ApiResponse>
) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "ID inválido",
        error: "Invalid ID format",
      });
    }
    const statusTicket = await statusTicketService.getStatusTicketById(id);
    if (!statusTicket) {
      return res.status(404).json({
        success: false,
        message: "Estado de ticket no encontrado",
        error: "Status ticket not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Estado de ticket obtenido exitosamente",
      data: statusTicket,
    });
  } catch (error) {
    console.error("Error fetching status ticket by ID:", error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener estado de ticket",
      error: formatError(error),
    });
  }
};

// Actualizar un estado de ticket
export const updateStatusTicket = async (
  req: Request,
  res: Response<ApiResponse>
) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "ID inválido",
        error: "Invalid ID format",
      });
    }
    const data: UpdateStatusTicketRequest = req.body;
    const updatedStatusTicket = await statusTicketService.updateStatusTicket(
      id,
      data
    );
    if (!updatedStatusTicket) {
      return res.status(404).json({
        success: false,
        message: "Estado de ticket no encontrado",
        error: "Status ticket not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Estado de ticket actualizado exitosamente",
      data: updatedStatusTicket,
    });
  } catch (error) {
    console.error("Error updating status ticket:", error);
    return res.status(500).json({
      success: false,
      message: "Error al actualizar estado de ticket",
      error: formatError(error),
    });
  }
};

// Eliminar un estado de ticket
export const deleteStatusTicket = async (
  req: Request,
  res: Response<ApiResponse>
) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "ID inválido",
        error: "Invalid ID format",
      });
    }
    const deleted = await statusTicketService.deleteStatusTicket(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Estado de ticket no encontrado",
        error: "Status ticket not found",
      });
    }
    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting status ticket:", error);
    return res.status(500).json({
      success: false,
      message: "Error al eliminar estado de ticket",
      error: formatError(error),
    });
  }
};
