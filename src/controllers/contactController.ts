import { Request, Response } from "express";
import * as ContactService from "../services/contactService";
import { CreateContactRequest, UpdateContactRequest } from "../types/contactTypes";
import { formatError } from "../utils/formatError";
import { ApiResponse } from "../types/apiTypes";

// Crear contacto
export const createContact = async (req: Request, res: Response) => {
  try {
    const data: CreateContactRequest = req.body;
    if (!data.name || !data.email) {
      return res.status(400).json({ message: "Se requiere name y email" });
    }
    const newContact = await ContactService.createContact(data);
    return res.status(201).json(newContact);
  } catch (error) {
    console.error("Error al crear contacto:", error);
    return res.status(500).json({ message: "Error al crear el contacto" });
  }
};

// Obtener todos
export const getAllContacts = async (_req: Request, res: Response) => {
  try {
    const contacts = await ContactService.getAllContacts();
    return res.status(200).json(contacts);
  } catch (error) {
    console.error("Error al obtener contactos:", error);
    return res.status(500).json({ message: "Error al obtener contactos" });
  }
};

// Obtener por ID
export const getContactById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const contact = await ContactService.getContactById(id);
    if (!contact) return res.status(404).json({ message: "Contacto no encontrado" });
    return res.status(200).json(contact);
  } catch (error) {
    console.error("Error al obtener contacto:", error);
    return res.status(500).json({ message: "Error al obtener contacto" });
  }
};

// Actualizar
export const updateContact = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data: UpdateContactRequest = req.body;
    const updated = await ContactService.updateContact(id, data);
    if (!updated) return res.status(404).json({ message: "Contacto no encontrado" });
    return res.status(200).json(updated);
  } catch (error) {
    console.error("Error al actualizar contacto:", error);
    return res.status(500).json({ message: "Error al actualizar contacto" });
  }
};

// Eliminar
export const deleteContact = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deleted = await ContactService.deleteContact(id);
    if (!deleted) return res.status(404).json({ message: "Contacto no encontrado" });
    return res.status(204).send();
  } catch (error) {
    console.error("Error al eliminar contacto:", error);
    return res.status(500).json({ message: "Error al eliminar contacto" });
  }
};

// Filtrar por clientId
export const getContactsByClientId = async (req: Request, res: Response) => {
  try {
    const clientId = Number(req.params.clientId);
    const contacts = await ContactService.getContactsByClientId(clientId);
    return res.status(200).json(contacts);
  } catch (error) {
    console.error("Error al obtener contactos por cliente:", error);
    return res.status(500).json({ message: "Error al obtener contactos por cliente" });
  }
};

// Filtrar por type
export const getContactsByType = async (req: Request, res: Response) => {
  try {
    const typeId = Number(req.params.typeId);
    const contacts = await ContactService.getContactsByType(typeId);
    return res.status(200).json(contacts);
  } catch (error) {
    console.error("Error al obtener contactos por tipo:", error);
    return res.status(500).json({ message: "Error al obtener contactos por tipo" });
  }
};

// Filtros vía query params
export const getContactsByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const contacts = await ContactService.getContactsByEmail(email);
    return res.status(200).json(contacts);
  } catch (error) {
    console.error("Error al obtener contactos por email:", error);
    return res.status(500).json({ message: "Error al obtener contactos por email" });
  }
};

export const getContactsByPhone = async (req: Request, res: Response) => {
  try {
    const phone = req.query.phone as string;
    const contacts = await ContactService.getContactsByPhone(phone);
    return res.status(200).json(contacts);
  } catch (error) {
    console.error("Error al obtener contactos por teléfono:", error);
    return res.status(500).json({ message: "Error al obtener contactos por teléfono" });
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
    console.error("Error al obtener contactos por nombre:", error);
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
    console.error("Error al obtener contactos por campo personalizado:", error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener contactos por campo personalizado",
      error: formatError(error)
    });
  }
};
