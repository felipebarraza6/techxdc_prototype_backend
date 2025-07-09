import { Request, Response } from "express";
import * as ContactService from "../services/contactService";
import { CreateContactRequest, UpdateContactRequest } from "../types/contactTypes";
import { formatError } from "../utils/formatError";
import { ApiResponse } from "../types/apiTypes";

// Crear contacto
export const createContact = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const data: CreateContactRequest = req.body;
    if (!data.name || !data.email) {
      return res.status(400).json({
        success: false,
        message: "El nombre y el email son obligatorios",
        error: "Validation Error"
      });
    }
    const newContact = await ContactService.createContact(data);
    return res.status(201).json({
      success: true,
      message: "Contacto creado exitosamente",
      data: newContact
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al crear contacto",
      error: formatError(error)
    });
  }
};

// Obtener todos
export const getAllContacts = async (_req: Request, res: Response<ApiResponse>) => {
  try {
    const contacts = await ContactService.getAllContacts();
    return res.status(200).json({
      success: true,
      message: "Contactos obtenidos exitosamente",
      data: contacts
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener contactos",
      error: formatError(error)
    });
  }
};

// Obtener por ID
export const getContactById = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = Number(req.params.id);
    const contact = await ContactService.getContactById(id);
    if (!contact) return res.status(404).json({
      success: false,
      message: "Contacto no encontrado",
      error: "No se encontró contacto con el ID proporcionado"
    });
    return res.status(200).json({
      success: true,
      message: "Contacto obtenido exitosamente",
      data: contact
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener contacto",
      error: formatError(error)
    });
  }
};

// Actualizar
export const updateContact = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = Number(req.params.id);
    const data: UpdateContactRequest = req.body;
    const updated = await ContactService.updateContact(id, data);
    if (!updated) return res.status(404).json({
      success: false,
      message: "Contacto no encontrado",
      error: "No se encontró contacto con el ID proporcionado"
    });
    return res.status(200).json({
      success: true,
      message: "Contacto actualizado exitosamente",
      data: updated
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al actualizar contacto",
      error: formatError(error)
    });
  }
};

// Eliminar
export const deleteContact = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = Number(req.params.id);
    const deleted = await ContactService.deleteContact(id);
    if (!deleted) return res.status(404).json({
      success: false,
      message: "Contacto no encontrado",
      error: "No se encontró contacto con el ID proporcionado"
    });
    return res.status(204).send({
      success: true,
      message: "Contacto eliminado exitosamente"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al eliminar contacto",
      error: formatError(error)
    });
  }
};

// Filtrar por clientId
export const getContactsByClientId = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const clientId = Number(req.params.clientId);
    const contacts = await ContactService.getContactsByClientId(clientId);
    return res.status(200).json({
      success: true,
      message: "Contactos obtenidos exitosamente por clientId",
      data: contacts
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener contactos por clientId",
      error: formatError(error)
    });
  }
};

// Filtrar por type
export const getContactsByType = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const typeId = Number(req.params.typeId);
    const contacts = await ContactService.getContactsByType(typeId);
    return res.status(200).json({
      success: true,
      message: "Contactos obtenidos exitosamente por tipo",
      data: contacts
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener contactos por tipo",
      error: formatError(error)
    });
  }
};

// Filtros vía query params
export const getContactsByEmail = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const email = req.query.email as string;
    const contacts = await ContactService.getContactsByEmail(email);
    return res.status(200).json({
      success: true,
      message: "Contactos obtenidos exitosamente por email",
      data: contacts
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener contactos por email",
      error: formatError(error)
    });
  }
};

export const getContactsByPhone = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const phone = req.query.phone as string;
    const contacts = await ContactService.getContactsByPhone(phone);
    return res.status(200).json({
      success: true,
      message: "Contactos obtenidos exitosamente por teléfono",
      data: contacts
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener contactos por teléfono",
      error: formatError(error)
    });
  }
};

export const getContactsByName = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const name = req.query.name as string;
    const contacts = await ContactService.getContactsByName(name);
    return res.status(200).json({
      success: true,
      message: "Contactos obtenidos exitosamente",
      data: contacts
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener contactos por nombre",
      error: formatError(error)
    });
  }
};

export const getContactsByCustomField = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const field = req.query.field as string;
    const value = req.query.value;
    const contacts = await ContactService.getContactsByCustomField(field, value);
    return res.status(200).json({
      success: true,
      message: "Contactos obtenidos exitosamente por campo personalizado",
      data: contacts
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener contactos por campo personalizado",
      error: formatError(error)
    });
  }
};
