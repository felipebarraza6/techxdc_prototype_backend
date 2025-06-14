import { Request, Response } from "express";
import * as ClientService from "../services/clientService";
import {
  CreateClientRequest,
  UpdateClientRequest,
} from "../types/clientType";

export const createClient = async (req: Request, res: Response) => {
  try {
    const data: CreateClientRequest = req.body;
    const newClient = await ClientService.createClient(data);
    return res.status(201).json(newClient);
  } catch (error) {
    console.error("Error al crear cliente:", error);
    return res.status(500).json({ message: "Error al crear el cliente" });
  }
};

export const getAllClients = async (_req: Request, res: Response) => {
  try {
    const clients = await ClientService.getAllClients();
    return res.status(200).json(clients);
  } catch (error) {
    console.error("Error al obtener clientes:", error);
    return res.status(500).json({ message: "Error al obtener clientes" });
  }
};

export const getClientById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const client = await ClientService.getClientById(id);
    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    return res.status(200).json(client);
  } catch (error) {
    console.error("Error al obtener cliente:", error);
    return res.status(500).json({ message: "Error al obtener cliente" });
  }
};

export const updateClient = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data: UpdateClientRequest = req.body;
    const updated = await ClientService.updateClient(id, data);
    if (!updated) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    return res.status(200).json(updated);
  } catch (error) {
    console.error("Error al actualizar cliente:", error);
    return res.status(500).json({ message: "Error al actualizar cliente" });
  }
};

export const deleteClient = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deleted = await ClientService.deleteClient(id);
    if (!deleted) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    return res.status(204).send(); // Nada que devolver, pero todo bien
  } catch (error) {
    console.error("Error al eliminar cliente:", error);
    return res.status(500).json({ message: "Error al eliminar cliente" });
  }
};
