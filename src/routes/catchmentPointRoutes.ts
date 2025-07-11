import { Router } from "express";
import { createCatchmentPoint, deleteCatchmentPoint, getAllCatchmentPoint, getCatchmentPointById, updateCatchmentPoint } 
from "../controllers/catchmentPointController";
import { authenticateToken } from '../middlewares/authMiddleware';

const catchmentPointRouter = Router();

catchmentPointRouter.get("/", authenticateToken, getAllCatchmentPoint);
catchmentPointRouter.get("/:id", authenticateToken, getCatchmentPointById);
catchmentPointRouter.post("/", authenticateToken, createCatchmentPoint);
catchmentPointRouter.put("/:id", authenticateToken, updateCatchmentPoint);
catchmentPointRouter.delete("/:id", authenticateToken, deleteCatchmentPoint);

export default catchmentPointRouter;