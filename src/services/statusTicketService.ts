import StatusTicket from "../models/statusTicket";
import {
  CreateStatusTicketRequest,
  UpdateStatusTicketRequest,
} from "../types/statusTicketType";

// Crear un nuevo estado de ticket
export const createStatusTicket = async (data: CreateStatusTicketRequest) => {
  const statusTicket = await StatusTicket.create(data);
  return statusTicket;
};

// Obtener todos los estados de tickets
export const getAllStatusTickets = async () => {
  const statusTickets = await StatusTicket.findAll();
  return statusTickets;
};

// Obtener un estado de ticket por ID
export const getStatusTicketById = async (id: number) => {
  const statusTicket = await StatusTicket.findByPk(id);
  return statusTicket;
};

// Actualizar un estado de ticket
export const updateStatusTicket = async (
  id: number,
  data: UpdateStatusTicketRequest
) => {
  const statusTicket = await StatusTicket.findByPk(id);
  if (!statusTicket) return null;
  await statusTicket.update(data);
  return statusTicket;
};

// Eliminar un estado de ticket
export const deleteStatusTicket = async (id: number) => {
  const statusTicket = await StatusTicket.findByPk(id);
  if (!statusTicket) return null;
  await statusTicket.destroy();
  return true;
};