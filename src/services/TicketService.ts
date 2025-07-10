import CatchmentPoint from "../models/CatchmentPoint";
import Ticket from "../models/Tickets";
import User from "../models/User";
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
  const ticket = await Ticket.findByPk(id, {
    include: [
      {
        model: User,
        as: "creator",
        attributes: ["id", "name", "email"]
      },
      {
        model: User,
        as: "assignedUser",
        attributes: ["id", "name", "email"]
      },
      {
        model: CatchmentPoint,
        as: "catchmentPoint",
        attributes: ["id", "title", "code_dga"]
      }
    ]
  });
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