import { Router } from "express";
import {
  createStatusTicket,
  getAllStatusTickets,
  getStatusTicketById,
  updateStatusTicket,
  deleteStatusTicket,
} from "../controllers/statusTicketController";
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();

router.post("/", authenticateToken, createStatusTicket); // http://localhost:3000/api/status-tickets
router.get("/", authenticateToken, getAllStatusTickets); // http://localhost:3000/api/status-tickets
router.get("/:id", authenticateToken, getStatusTicketById); // http://localhost:3000/api/status-tickets/:id
router.put("/:id", authenticateToken, updateStatusTicket); //  http://localhost:3000/api/status-tickets/:id
router.delete("/:id", authenticateToken, deleteStatusTicket); // http://localhost:3000/api/status-tickets/:id

export default router;
