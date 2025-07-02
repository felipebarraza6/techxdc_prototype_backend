import Ticket from "../models/Tickets";
import { CreateTicketRequest, UpdateTicketRequest } from "../types/TicketType";

export const createTicket = async (data: CreateTicketRequest) => {
  const ticket = await Ticket.create({ ...data });
  return ticket;
};

export const getAllTickets = async () => {
  const tickets = await Ticket.findAll();
  return tickets;
};

export const getTicketById = async (id: number) => {
  const ticket = await Ticket.findByPk(id);
  return ticket;
};

export const updateTicket = async (id: number, data: UpdateTicketRequest) => {
  const ticket = await Ticket.findByPk(id);
  if (!ticket) return null;
  await ticket.update(data);
  return ticket;
};

export const deleteTicket = async (id: number) => {
  const ticket = await Ticket.findByPk(id);
  if (!ticket) return null;
  await ticket.destroy();
  return true;
};