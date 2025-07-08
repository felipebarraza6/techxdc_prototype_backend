import ClientModule from "../models/ClientModule";
import { CreateClientModuleRequest, UpdateClientModuleRequest } from "../types/clientModuleTypes";

// Crear un nuevo ClientModule
export const createClientModule = async (data: CreateClientModuleRequest) => {
  const clientModule = await ClientModule.create({
    module_id: data.module_id,
    enabled_to_type: data.enabled_to_type,
    reference_id: data.reference_id,
    is_enabled: data.is_enabled ?? true, // Por defecto true si no se envía
  });
  return clientModule;
};

// Obtener todos los ClientModules
export const getAllClientModules = async () => {
  const clientModules = await ClientModule.findAll();
  return clientModules;
};

// Obtener un ClientModule por ID
export const getClientModuleById = async (id: number) => {
  const clientModule = await ClientModule.findByPk(id);
  return clientModule;
};

// Actualizar un ClientModule
export const updateClientModule = async (id: number, data: UpdateClientModuleRequest) => {
  const clientModule = await ClientModule.findByPk(id);
  if (!clientModule) return null;
  await clientModule.update(data);
  return clientModule;
};

// Eliminar un ClientModule
export const deleteClientModule = async (id: number) => {
  const clientModule = await ClientModule.findByPk(id);
  if (!clientModule) return null;
  await clientModule.destroy();
  return true;
};

// Obtener ClientModules por client_id
export const getClientModulesByClientId = async (clientId: number) => {
  const clientModules = await ClientModule.findAll({
    where: { reference_id: clientId },
  });
  return clientModules;
};

// Obtener ClientModules por module_id
export const getClientModulesByModuleId = async (moduleId: number) => {
  const clientModules = await ClientModule.findAll({
    where: { module_id: moduleId },
  });
  return clientModules;
};