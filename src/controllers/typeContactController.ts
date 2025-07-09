import { Request, Response } from "express";
import * as typeContactService from "../services/typeContactService";
import {
  CreateTypeContactRequest,
  UpdateTypeContactRequest,
} from "../types/typeContactTypes";
import { ApiResponse } from "../types/apiTypes";
import { formatError } from "../utils/formatError";

// Crear un nuevo tipo de contacto
export const createTypeContact = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const data: CreateTypeContactRequest = req.body;
    const typeContact = await typeContactService.createTypeContact(data);
    return res.status(201).json({
      success: true,
      message: "Tipo de contacto creado exitosamente",
      data: typeContact,
    });
  } catch (error) {
    console.error("Error creating type contact:", error);
    return res.status(500).json({ 
      success: false,
      message: "Error al crear el tipo de contacto",
      error: formatError(error),
    });
  }
};

// Obtener todos los tipos de contacto
export const getAllTypeContacts = async (_req: Request, res: Response<ApiResponse>) => {
  try {
    const typeContacts = await typeContactService.getAllTypeContacts();
    return res.status(200).json(
      {
        success: true,
        message: "Tipos de contacto obtenidos exitosamente",
        data: typeContacts,
      }
    );
  } catch (error) {
    console.error("Error fetching type contacts:", error);
    return res.status(500).json({ 
      success: false,
      message: "Error al obtener los tipos de contacto",
      error: formatError(error),
    });
  }
};

// Obtener un tipo de contacto por ID
export const getTypeContactById = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "ID inválido",
        error: "El ID debe ser un número entero"
      });
    }
    const typeContact = await typeContactService.getTypeContactById(id);
    if (!typeContact) {
      return res.status(404).json({
        success: false,
        message: "Tipo de contacto no encontrado",
        error: "No se encontró un tipo de contacto con el ID proporcionado"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Tipo de contacto obtenido exitosamente",
      data: typeContact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener el tipo de contacto",
      error: formatError(error),
    });
  }
};

// Actualizar un tipo de contacto
export const updateTypeContact = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: "Formato de ID inválido",
        message: "El ID debe ser un número entero"
      });
    }
    const data: UpdateTypeContactRequest = req.body;
    const updatedTypeContact = await typeContactService.updateTypeContact(id, data);
    if (!updatedTypeContact) {
      return res.status(404).json({
        success: false,
        error: "Tipo de contacto no encontrado",
        message: "No se encontró un tipo de contacto con el ID proporcionado"
      });
    }
    return res.status(200).json(
      {
        success: true,
        message: "Tipo de contacto actualizado exitosamente",
        data: updatedTypeContact,
      }
    );
  } catch (error) {
    console.error("Error updating type contact:", error);
    return res.status(500).json({
      success: false,
      message: "Error al actualizar el tipo de contacto",
      error: formatError(error),
    });
  }
};

// Eliminar un tipo de contacto
export const deleteTypeContact = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: "Formato de ID inválido",
        message: "El ID debe ser un número entero"
      });
    }
    const deleted = await typeContactService.deleteTypeContact(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: "Tipo de contacto no encontrado",
        message: "No se encontró un tipo de contacto con el ID proporcionado"
      });
    }
    return res.status(204).send({
      success: true,
      message: "Tipo de contacto eliminado exitosamente",
    });
  } catch (error) { 
    return res.status(500).json({
      success: false,
      message: "Error al eliminar el tipo de contacto",
      error: formatError(error),
    });
  }
};