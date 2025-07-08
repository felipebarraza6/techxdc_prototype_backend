import { Request, Response } from "express";
import * as clientModuleService from "../services/clientModuleService";
import {
  CreateClientModuleRequest,
  UpdateClientModuleRequest,
} from "../types/clientModuleTypes";

// Crear un nuevo ClientModule
export const createClientModule = async (req: Request, res: Response) => {
  try {
    const data: CreateClientModuleRequest = req.body;
    const clientModule = await clientModuleService.createClientModule(data);
    return res.status(201).json(clientModule);
  } catch (error) {
    console.error("Error creating client module:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Obtener todos los ClientModules
export const getAllClientModules = async (_req: Request, res: Response) => {
  try {
    const clientModules = await clientModuleService.getAllClientModules();
    return res.status(200).json(clientModules);
  } catch (error) {
    console.error("Error fetching client modules:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Obtener un ClientModule por ID
export const getClientModuleById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
    const clientModule = await clientModuleService.getClientModuleById(id);
    if (!clientModule) {
      return res.status(404).json({ error: "Client module not found" });
    }
    return res.status(200).json(clientModule);
  } catch (error) {
    console.error("Error fetching client module by ID:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Actualizar un ClientModule
export const updateClientModule = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
    const data: UpdateClientModuleRequest = req.body;
    const updatedClientModule = await clientModuleService.updateClientModule(id, data);
    if (!updatedClientModule) {
      return res.status(404).json({ error: "Client module not found" });
    }
    return res.status(200).json(updatedClientModule);
  } catch (error) {
    console.error("Error updating client module:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Eliminar un ClientModule
export const deleteClientModule = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
    const deleted = await clientModuleService.deleteClientModule(id);
    if (!deleted) {
      return res.status(404).json({ error: "Client module not found" });
    }
    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting client module:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Obtener ClientModules por client_id
export const getClientModulesByClientId = async (req: Request, res: Response) => {
  try {
    const clientId = parseInt(req.params.clientId, 10);
    if (isNaN(clientId)) {
      return res.status(400).json({ error: "Invalid clientId format" });
    }
    const clientModules = await clientModuleService.getClientModulesByClientId(clientId);
    return res.status(200).json(clientModules);
  } catch (error) {
    console.error("Error fetching client modules by clientId:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Obtener ClientModules por module_id
export const getClientModulesByModuleId = async (req: Request, res: Response) => {
  try {
    const moduleId = parseInt(req.params.moduleId, 10);
    if (isNaN(moduleId)) {
      return res.status(400).json({ error: "Invalid moduleId format" });
    }
    const clientModules = await clientModuleService.getClientModulesByModuleId(moduleId);
    return res.status(200).json(clientModules);
  } catch (error) {
    console.error("Error fetching client modules by moduleId:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};