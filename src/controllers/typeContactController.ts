import { Request, Response } from "express";
import * as typeContactService from "../services/typeContactService";
import {
  CreateTypeContactRequest,
  UpdateTypeContactRequest,
} from "../types/typeContactTypes";

// Crear un nuevo tipo de contacto
export const createTypeContact = async (req: Request, res: Response) => {
  try {
    const data: CreateTypeContactRequest = req.body;
    const typeContact = await typeContactService.createTypeContact(data);
    return res.status(201).json(typeContact);
  } catch (error) {
    console.error("Error creating type contact:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Obtener todos los tipos de contacto
export const getAllTypeContacts = async (_req: Request, res: Response) => {
  try {
    const typeContacts = await typeContactService.getAllTypeContacts();
    return res.status(200).json(typeContacts);
  } catch (error) {
    console.error("Error fetching type contacts:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Obtener un tipo de contacto por ID
export const getTypeContactById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
    const typeContact = await typeContactService.getTypeContactById(id);
    if (!typeContact) {
      return res.status(404).json({ error: "Type contact not found" });
    }
    return res.status(200).json(typeContact);
  } catch (error) {
    console.error("Error fetching type contact by ID:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Actualizar un tipo de contacto
export const updateTypeContact = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
    const data: UpdateTypeContactRequest = req.body;
    const updatedTypeContact = await typeContactService.updateTypeContact(id, data);
    if (!updatedTypeContact) {
      return res.status(404).json({ error: "Type contact not found" });
    }
    return res.status(200).json(updatedTypeContact);
  } catch (error) {
    console.error("Error updating type contact:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Eliminar un tipo de contacto
export const deleteTypeContact = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
    const deleted = await typeContactService.deleteTypeContact(id);
    if (!deleted) {
      return res.status(404).json({ error: "Type contact not found" });
    }
    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting type contact:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};