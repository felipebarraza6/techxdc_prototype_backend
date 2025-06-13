import { Router } from "express";
import {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
} from "../controllers/TicketController";

const ticketRouter = Router();

ticketRouter.get("/", getAllTickets);
ticketRouter.get("/:id", getTicketById);
ticketRouter.post("/", createTicket);
ticketRouter.put("/:id", updateTicket);
ticketRouter.delete("/:id", deleteTicket);

export default ticketRouter;
