import { Router } from "express";
import {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
} from "../controllers/TicketController";
import { authenticateToken } from '../middlewares/authMiddleware';

const ticketRouter = Router();

ticketRouter.get("/", authenticateToken, getAllTickets);
ticketRouter.get("/:id", authenticateToken, getTicketById);
ticketRouter.post("/", authenticateToken, createTicket);
ticketRouter.put("/:id", authenticateToken, updateTicket);
ticketRouter.delete("/:id", authenticateToken, deleteTicket);

export default ticketRouter;
