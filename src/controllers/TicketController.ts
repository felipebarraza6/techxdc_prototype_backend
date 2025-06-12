import { Request, Response } from "express";
import * as TicketService from "../services/TicketService";
import {
  CreateTicketRequest,
  UpdateTicketRequest,
} from "../types/TicketType";

export const createTicket = async (req: Request, res: Response) => {
  try {
    const data: CreateTicketRequest = req.body;
    const newTicket = await TicketService.createTicket(data);
    return res.status(201).json(newTicket);
  } catch (error) {
    console.error("Error al crear ticket:", error);
    return res.status(500).json({ message: "Error al crear el ticket" });
  }
};

export const getAllTickets = async (_req: Request, res: Response) => {
  try {
    const tickets = await TicketService.getAllTickets();
    return res.status(200).json(tickets);
  } catch (error) {
    console.error("Error al obtener tickets:", error);
    return res.status(500).json({ message: "Error al obtener tickets" });
  }
};

export const getTicketById = async (req: Request, res: Response) => {
  try {
    const ticketId = Number(req.params.id);
    const ticket = await TicketService.getTicketById(ticketId);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket no encontrado" });
    }
    return res.status(200).json(ticket);
  } catch (error) {
    console.error("Error al obtener ticket por ID:", error);
    return res.status(500).json({ message: "Error al obtener ticket" });
  }
};

export const updateTicket = async (req: Request, res: Response) => {
  try {
    const ticketId = Number(req.params.id);
    const data: UpdateTicketRequest = req.body;
    const updatedTicket = await TicketService.updateTicket(ticketId, data);
    if (!updatedTicket) {
      return res.status(404).json({ message: "Ticket no encontrado" });
    }
    return res.status(200).json(updatedTicket);
  } catch (error) {
    console.error("Error al actualizar ticket:", error);
    return res.status(500).json({ message: "Error al actualizar ticket" });
  }
};

export const deleteTicket = async (req: Request, res: Response) => {
  try {
    const ticketId = Number(req.params.id);
    const deleted = await TicketService.deleteTicket(ticketId);
    if (!deleted) {
      return res.status(404).json({ message: "Ticket no encontrado" });
    }
    return res.status(204).send(); // sin contenido
  } catch (error) {
    console.error("Error al eliminar ticket:", error);
    return res.status(500).json({ message: "Error al eliminar ticket" });
  }
};
