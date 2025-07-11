import { Router } from "express";
import { createFinanceMovement, deleteFinanceMovement, getAllFinanceMovement, getFinanceMovementById, updateFinanceMovement } 
from "../controllers/financeMovementController";
import { authenticateToken } from '../middlewares/authMiddleware';

const financeMovementRouter = Router();

financeMovementRouter.get("/", authenticateToken, getAllFinanceMovement);
financeMovementRouter.get("/:id", authenticateToken, getFinanceMovementById);
financeMovementRouter.post("/", authenticateToken, createFinanceMovement);
financeMovementRouter.put("/:id", authenticateToken, updateFinanceMovement);
financeMovementRouter.delete("/:id", authenticateToken, deleteFinanceMovement);

export default financeMovementRouter;