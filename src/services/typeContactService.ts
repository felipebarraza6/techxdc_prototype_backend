import TypeContact from "../models/TypeContact";
import {
  CreateTypeContactRequest,
  UpdateTypeContactRequest,
} from "../types/typeContactTypes";

// Crear un nuevo tipo de contacto
export const createTypeContact = async (data: CreateTypeContactRequest) => {
  const typeContact = await TypeContact.create({ ...data });
  return typeContact;
};

// Obtener todos los tipos de contacto
export const getAllTypeContacts = async () => {
  const typeContacts = await TypeContact.findAll();
  return typeContacts;
};

// Obtener un tipo de contacto por ID
export const getTypeContactById = async (id: number) => {
  const typeContact = await TypeContact.findByPk(id);
  return typeContact;
};

// Actualizar un tipo de contacto
export const updateTypeContact = async (id: number, data: UpdateTypeContactRequest) => {
  const typeContact = await TypeContact.findByPk(id);
  if (!typeContact) return null;
  await typeContact.update(data);
  return typeContact;
};

// Eliminar un tipo de contacto
export const deleteTypeContact = async (id: number) => {
  const typeContact = await TypeContact.findByPk(id);
  if (!typeContact) return null;
  await typeContact.destroy();
  return true;
};