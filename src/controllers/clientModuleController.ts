import { Request, Response } from "express";
import * as clientModuleService from "../services/clientModuleService";
import {
  CreateClientModuleRequest,
  UpdateClientModuleRequest,
} from "../types/clientModuleTypes";
import { ApiResponse } from "../types/apiTypes";
import { formatError } from "../utils/formatError";

// Crear un nuevo ClientModule
export const createClientModule = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const data: CreateClientModuleRequest = req.body;
    const clientModule = await clientModuleService.createClientModule(data);
    return res.status(201).json({
      success: true,
      message: "Módulo de cliente creado exitosamente",
      data: clientModule,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating client module",
      error: formatError(error),
    });
  }
};

// Obtener todos los ClientModules
export const getAllClientModules = async (_req: Request, res: Response<ApiResponse>) => {
  try {
    const clientModules = await clientModuleService.getAllClientModules();
    return res.status(200).json({
      success: true,
      message: "Client modules retrieved successfully",
      data: clientModules,
    });
  } catch (error) {
    console.error("Error fetching client modules:", error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener los módulos de cliente",
      error: formatError(error),
    });
  }
};

// Obtener un ClientModule por ID
export const getClientModuleById = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: "Formato de ID inválido",
        message: "El ID debe ser un número entero"
      });
    }
    const clientModule = await clientModuleService.getClientModuleById(id);
    if (!clientModule) {
      return res.status(404).json({
        success: false,
        error: "Módulo de cliente no encontrado",
        message: "No se encontró un módulo de cliente con el ID proporcionado"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Módulo de cliente obtenido exitosamente",
      data: clientModule,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener el módulo de cliente",
      error: formatError(error),
    });
  }
};

// Actualizar un ClientModule
export const updateClientModule = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: "Formato de ID inválido",
        message: "El ID debe ser un número entero"
      });
    }
    const data: UpdateClientModuleRequest = req.body;
    const updatedClientModule = await clientModuleService.updateClientModule(id, data);
    if (!updatedClientModule) {
      return res.status(404).json({
        success: false,
        error: "Módulo de cliente no encontrado",
        message: "No se encontró un módulo de cliente con el ID proporcionado"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Módulo de cliente actualizado exitosamente",
      data: updatedClientModule,
    });
  } catch (error) {
    console.error("Error updating client module:", error);
    return res.status(500).json({
      success: false,
      message: "Error al actualizar el módulo de cliente",
      error: formatError(error),
    });
  }
};

// Eliminar un ClientModule
export const deleteClientModule = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: "Formato de ID inválido",
        message: "El ID debe ser un número entero"
      });
    }
    const deleted = await clientModuleService.deleteClientModule(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: "Módulo de cliente no encontrado",
        message: "No se encontró un módulo de cliente con el ID proporcionado"
      });
    }
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al eliminar el módulo de cliente",
      error: formatError(error),
    });
  }
};

// Obtener ClientModules por client_id
export const getClientModulesByClientId = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const clientId = parseInt(req.params.clientId, 10);
    if (isNaN(clientId)) {
      return res.status(400).json({
        success: false,
        error: "Formato de clientId inválido",
        message: "El clientId debe ser un número entero"
      });
    }
    const clientModules = await clientModuleService.getClientModulesByClientId(clientId);
    return res.status(200).json({
      success: true,
      message: "Client modules retrieved successfully",
      data: clientModules,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener los módulos de cliente por clientId",
      error: formatError(error),
    });
  }
};

// Obtener ClientModules por module_id
export const getClientModulesByModuleId = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const moduleId = parseInt(req.params.moduleId, 10);
    if (isNaN(moduleId)) {
      return res.status(400).json({
        success: false,
        error: "Formato de moduleId inválido",
        message: "El moduleId debe ser un número entero"
      });
    }
    const clientModules = await clientModuleService.getClientModulesByModuleId(moduleId);
    return res.status(200).json({
      success: true,
      message: "Client modules retrieved successfully by moduleId",
      data: clientModules,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener los módulos de cliente por moduleId",
      error: formatError(error),
    });
  }
};