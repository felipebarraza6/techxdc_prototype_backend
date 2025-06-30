import { Router } from "express";
import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../controllers/responseTicketController";

const responseTicketRouter = Router();

responseTicketRouter.post("/", create); // POST http://localhost:3000/api/response-tickets
responseTicketRouter.get("/", getAll); // GET http://localhost:3000/api/response-tickets
responseTicketRouter.get("/:id", getById); // GET http://localhost:3000/api/response-tickets/:id
responseTicketRouter.put("/:id", update); // PUT http://localhost:3000/api/response-tickets/:id
responseTicketRouter.delete("/:id", remove); // DELETE http://localhost:3000/api/response-tickets/:id

export default responseTicketRouter;
