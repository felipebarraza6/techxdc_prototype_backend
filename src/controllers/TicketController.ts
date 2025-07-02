import { Request, Response } from "express";
import * as TicketService from "../services/TicketService";
import {
  CreateTicketRequest,
  UpdateTicketRequest,
} from "../types/TicketType";
import { ApiResponse } from "../types/apiTypes";
import { formatError } from "../utils/formatError";

export const createTicket = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const data: CreateTicketRequest = req.body;
    const newTicket = await TicketService.createTicket(data);
    return res.status(201).json({
      success: true,
      message: "Ticket creado exitosamente",
      data: newTicket,
    });
  } catch (error) {
    console.error("Error al crear ticket:", error);
    return res.status(500).json({
      success: false,
      message: "Error al crear ticket",
      error: formatError(error),
    });
  }
};

export const getAllTickets = async (_req: Request, res: Response<ApiResponse>) => {
  try {
    const tickets = await TicketService.getAllTickets();
    return res.status(200).json({
      success: true,
      message: "Tickets obtenidos exitosamente",
      data: tickets,
    });
  } catch (error) {
    console.error("Error al obtener tickets:", error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener tickets",
      error: formatError(error),
    });
  }
};

export const getTicketById = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const ticketId = Number(req.params.id);
    const ticket = await TicketService.getTicketById(ticketId);
    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket no encontrado",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Ticket obtenido exitosamente",
      data: ticket,
    });
  } catch (error) {
    console.error("Error al obtener ticket por ID:", error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener ticket por ID",
      error: formatError(error),
    });
  }
};

export const updateTicket = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const ticketId = Number(req.params.id);
    const data: UpdateTicketRequest = req.body;
    const updatedTicket = await TicketService.updateTicket(ticketId, data);
    if (!updatedTicket) {
      return res.status(404).json({
        success: false,
        message: "Ticket no encontrado",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Ticket actualizado exitosamente",
      data: updatedTicket,
    });
  } catch (error) {
    console.error("Error al actualizar ticket:", error);
    return res.status(500).json({
      success: false,
      message: "Error al actualizar ticket",
      error: formatError(error),
    });
  }
};

export const deleteTicket = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const ticketId = Number(req.params.id);
    const deleted = await TicketService.deleteTicket(ticketId);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Ticket no encontrado o no eliminado",
      });
    }
    return res.status(204).send(); // sin contenido
  } catch (error) {
    console.error("Error al eliminar ticket:", error);
    return res.status(500).json({
      success: false,
      message: "Error al eliminar ticket",
      error: formatError(error),
    });
  }
};
