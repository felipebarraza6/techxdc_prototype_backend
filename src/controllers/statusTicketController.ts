import { Request, Response } from "express";
import * as statusTicketService from "../services/statusTicketService";
import {
  CreateStatusTicketRequest,
  UpdateStatusTicketRequest,
} from "../types/statusTicketType";

// Crear un nuevo estado de ticket
export const createStatusTicket = async (req: Request, res: Response) => {
  console.log("📦 Body recibido:", req.body);
  try {
    const data: CreateStatusTicketRequest = req.body;
    const statusTicket = await statusTicketService.createStatusTicket(data);
    return res.status(201).json(statusTicket);
  } catch (error) {
    console.error("💥 Error stack:", error);
    console.error("Error creating status ticket:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Obtener todos los estados de tickets
export const getAllStatusTickets = async (_req: Request, res: Response) => {
  try {
    const statusTickets = await statusTicketService.getAllStatusTickets();
    return res.status(200).json(statusTickets);
  } catch (error) {
    console.error("Error fetching status tickets:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Obtener un estado de ticket por ID
export const getStatusTicketById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
    const statusTicket = await statusTicketService.getStatusTicketById(id);
    if (!statusTicket) {
      return res.status(404).json({ error: "Status ticket not found" });
    }
    return res.status(200).json(statusTicket);
  } catch (error) {
    console.error("Error fetching status ticket by ID:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Actualizar un estado de ticket
export const updateStatusTicket = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
    const data: UpdateStatusTicketRequest = req.body;
    const updatedStatusTicket = await statusTicketService.updateStatusTicket(id, data);
    if (!updatedStatusTicket) {
      return res.status(404).json({ error: "Status ticket not found" });
    }
    return res.status(200).json(updatedStatusTicket);
  } catch (error) {
    console.error("Error updating status ticket:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Eliminar un estado de ticket
export const deleteStatusTicket = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
    const deleted = await statusTicketService.deleteStatusTicket(id);
    if (!deleted) {
      return res.status(404).json({ error: "Status ticket not found" });
    }
    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting status ticket:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};