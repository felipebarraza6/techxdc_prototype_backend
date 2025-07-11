import { Router } from "express";
import { createComuna, deleteComuna, getAllComuna, getComunaById, updateComuna } 
from "../controllers/comunaController";
import { authenticateToken } from '../middlewares/authMiddleware';

const comunaRouter = Router();

comunaRouter.get("/", authenticateToken, getAllComuna);
comunaRouter.get("/:id", authenticateToken, getComunaById);
comunaRouter.post("/", authenticateToken, createComuna);
comunaRouter.put("/:id", authenticateToken, updateComuna);
comunaRouter.delete("/:id", authenticateToken, deleteComuna);

export default comunaRouter;