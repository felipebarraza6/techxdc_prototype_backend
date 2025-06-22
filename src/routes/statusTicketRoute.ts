import { Router } from "express";
import {
  createStatusTicket,
  getAllStatusTickets,
  getStatusTicketById,
  updateStatusTicket,
  deleteStatusTicket,
} from "../controllers/statusTicketController";

const router = Router();

router.post("/", createStatusTicket); // http://localhost:3000/api/status-tickets
router.get("/", getAllStatusTickets); // http://localhost:3000/api/status-tickets
router.get("/:id", getStatusTicketById); // http://localhost:3000/api/status-tickets/:id
router.put("/:id", updateStatusTicket); //  http://localhost:3000/api/status-tickets/:id
router.delete("/:id", deleteStatusTicket); // http://localhost:3000/api/status-tickets/:id

export default router;
