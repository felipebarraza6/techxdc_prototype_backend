import { Request, Response } from "express";
import {
  createResponseTicket,
  getAllResponseTickets,
  getResponseTicketById,
  updateResponseTicket,
  deleteResponseTicket,
} from "../services/responseTicketService";

export const create = async (req: Request, res: Response) => {
  try {
    const responseTicket = await createResponseTicket(req.body);
    res.status(201).json(responseTicket);
  } catch (error) {
    console.error("🚨 Error al crear respuesta:", error);
    res.status(500).json({ message: "Error al crear respuesta" });
  }
};

export const getAll = async (_req: Request, res: Response) => {
  try {
    const responses = await getAllResponseTickets();
    res.json(responses);
  } catch (error) {
    console.error("🚨 Error al obtener respuestas:", error);
    res.status(500).json({ message: "Error al obtener respuestas" });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const response = await getResponseTicketById(Number(req.params.id));
    if (!response) {
      return res.status(404).json({ message: "Respuesta no encontrada" });
    }
    res.json(response);
  } catch (error) {
    console.error("🚨 Error al buscar respuesta:", error);
    res.status(500).json({ message: "Error al buscar respuesta" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const updated = await updateResponseTicket(Number(req.params.id), req.body);
    if (!updated) {
      return res.status(404).json({ message: "Respuesta no encontrada para actualizar" });
    }
    res.json(updated);
  } catch (error) {
    console.error("🚨 Error al actualizar respuesta:", error);
    res.status(500).json({ message: "Error al actualizar respuesta" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const deleted = await deleteResponseTicket(Number(req.params.id));
    if (!deleted) {
      return res.status(404).json({ message: "Respuesta no encontrada para eliminar" });
    }
    res.json({ message: "Respuesta eliminada correctamente" });
  } catch (error) {
    console.error("🚨 Error al eliminar respuesta:", error);
    res.status(500).json({ message: "Error al eliminar respuesta" });
  }
};
