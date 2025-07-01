// services/responseTicketService.ts

import ResponseTicket from "../models/ResponseTicket";
import {CreateResponseTicketRequest, UpdateResponseTicketRequest} from "../types/responseTicketType";

// Crear nueva respuesta a un ticket
export const createResponseTicket = async (data: CreateResponseTicketRequest) => {
  const response = await ResponseTicket.create({
    ticket_id: data.ticket_id, // mapeo correcto
    message: data.message,
    created_by: data.created_by,
  });
  return response;
};

// Obtener todas las respuestas
export const getAllResponseTickets = async () => {
  const responses = await ResponseTicket.findAll();
  return responses;
};

// Obtener una respuesta específica por ID
export const getResponseTicketById = async (id: number) => {
  const response = await ResponseTicket.findByPk(id);
  return response;
};

// Actualizar una respuesta
export const updateResponseTicket = async (id: number, data: UpdateResponseTicketRequest) => {
  const response = await ResponseTicket.findByPk(id);
  if (!response) return null;
  await response.update(data);
  return response;
};

// Eliminar una respuesta
export const deleteResponseTicket = async (id: number) => {
  const response = await ResponseTicket.findByPk(id);
  if (!response) return null;
  await response.destroy();
  return true;
};
