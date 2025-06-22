import { Router } from "express";
import { createComuna, deleteComuna, getAllComuna, getComunaById, updateComuna } 
from "../controllers/comunaController";

const comunaRouter = Router();

comunaRouter.get("/", getAllComuna);
comunaRouter.get("/:id", getComunaById);
comunaRouter.post("/", createComuna);
comunaRouter.put("/:id", updateComuna);
comunaRouter.delete("/:id", deleteComuna);

export default comunaRouter;