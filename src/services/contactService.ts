import Contact from "../models/Contacts";
import { CreateContactRequest, UpdateContactRequest } from "../types/contactTypes";
import { Op } from "sequelize";

export const createContact = async (data: CreateContactRequest) => {
  const contact = await Contact.create({ ...data });
  return contact;
};

export const getAllContacts = async () => {
  const contacts = await Contact.findAll({
    include: ["client", "typeContact"], // ← nombres definidos en las relaciones
  });
  return contacts;
};

export const getContactById = async (id: number) => {
  const contact = await Contact.findByPk(id, {
    include: ["client", "typeContact"],
  });
  return contact;
};

export const updateContact = async (id: number, data: UpdateContactRequest) => {
  const contact = await Contact.findByPk(id);
  if (!contact) return null;
  await contact.update(data);
  return contact;
};

export const deleteContact = async (id: number) => {
  const contact = await Contact.findByPk(id);
  if (!contact) return null;
  await contact.destroy();
  return true;
};

export const getContactsByClientId = async (clientId: number) => {
  const contacts = await Contact.findAll({
    where: { id_client: clientId },
    include: ["typeContact"], // Incluye el tipo de contacto
  });
  return contacts;
};

export const getContactsByType = async (typeId: number) => {
  const contacts = await Contact.findAll({
    where: { type: typeId },
    include: ["client"], // Incluye el cliente asociado
  });
  return contacts;
};

export const getContactsByEmail = async (email: string) => {
  const contacts = await Contact.findAll({
    where: { email },
    include: ["client", "typeContact"], // Incluye cliente y tipo de contacto
  });
  return contacts;
};
export const getContactsByPhone = async (phone: string) => {
  const contacts = await Contact.findAll({
    where: { phone },
    include: ["client", "typeContact"], // Incluye cliente y tipo de contacto
  });
  return contacts;
};
export const getContactsByName = async (name: string) => {
  const contacts = await Contact.findAll({
    where: { name: { [Op.like]: `%${name}%` } }, // Búsqueda por nombre
    include: ["client", "typeContact"], // Incluye cliente y tipo de contacto
  });
  return contacts;
};

export const getContactsByCustomField = async (field: string, value: any) => {
  const contacts = await Contact.findAll({
    where: {
      custom_fields: {
        [Op.contains]: { [field]: value }, // Búsqueda por campo personalizado
      },
    },
    include: ["client", "typeContact"], // Incluye cliente y tipo de contacto
  });
  return contacts;
};
