import { Router } from "express";
import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../controllers/responseTicketController";
import { authenticateToken } from '../middlewares/authMiddleware';

const responseTicketRouter = Router();

responseTicketRouter.post("/", authenticateToken, create); // POST http://localhost:3000/api/response-tickets
responseTicketRouter.get("/", authenticateToken, getAll); // GET http://localhost:3000/api/response-tickets
responseTicketRouter.get("/:id", authenticateToken, getById); // GET http://localhost:3000/api/response-tickets/:id
responseTicketRouter.put("/:id", authenticateToken, update); // PUT http://localhost:3000/api/response-tickets/:id
responseTicketRouter.delete("/:id", authenticateToken, remove); // DELETE http://localhost:3000/api/response-tickets/:id

export default responseTicketRouter;
