import { Request, Response } from "express";
import * as ClientService from "../services/clientService";
import {
  CreateClientRequest,
  UpdateClientRequest,
} from "../types/clientType";
import { ApiResponse } from "../types/apiTypes";
import { formatError } from "../utils/formatError";

export const createClient = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const data: CreateClientRequest = req.body;
    const newClient = await ClientService.createClient(data);
    return res.status(201).json({
      success: true,
      message: "Cliente creado exitosamente",
      data: newClient,
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false,
      message: "Error al crear cliente",
      error: formatError(error),
    });
  }
};

export const getAllClients = async (_req: Request, res: Response<ApiResponse>) => {
  try {
    const clients = await ClientService.getAllClients();
    return res.status(200).json({
      success: true,
      message: "Clientes obtenidos exitosamente",
      data: clients,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener clientes",
      error: formatError(error),
    });
  }
};

export const getClientById = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = Number(req.params.id);
    const client = await ClientService.getClientById(id);
    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Cliente no encontrado",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Cliente obtenido exitosamente",
      data: client,
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false,
      message: "Error al obtener cliente",
      error: formatError(error),
    });
  }
};

export const updateClient = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = Number(req.params.id);
    const data: UpdateClientRequest = req.body;
    const updated = await ClientService.updateClient(id, data);
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Cliente no encontrado o no actualizado",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Cliente actualizado exitosamente",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al actualizar cliente",
      error: formatError(error),
    });
  }
};

export const deleteClient = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = Number(req.params.id);
    const deleted = await ClientService.deleteClient(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Cliente no encontrado",
      });
    }
    return res.status(204).send({
      success: true,
      message: "Cliente eliminado exitosamente",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al eliminar cliente",
      error: formatError(error),
    });
  }
};
