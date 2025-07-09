import Client from "../models/Clients";
import { CreateClientRequest, UpdateClientRequest } from "../types/clientType";

export const createClient = async (data: CreateClientRequest) => {
  const existingClient = await Client.findOne({
    where: { dni: data.dni }
  });

  if (existingClient) {
    // Lanzamos error personalizado
    const error: any = new Error("Ya existe un cliente con ese DNI");
    error.status = 400;
    throw error;
  }

  const client = await Client.create({ ...data });
  return client;
};
export const getAllClients = async () => {
  const clients = await Client.findAll();
  return clients;
};
export const getClientById = async (id: number) => {
  const client = await Client.findByPk(id);
  return client;
};
export const updateClient = async (id: number, data: UpdateClientRequest) => {
  const client = await Client.findByPk(id);
  if (!client) return null;
  await client.update(data);
  return client;
};
export const deleteClient = async (id: number) => {
  const client = await Client.findByPk(id);
  if (!client) return null;
  await client.destroy();
  return true;
};
