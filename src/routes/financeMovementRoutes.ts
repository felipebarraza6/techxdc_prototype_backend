import { Router } from "express";
import { createFinanceMovement, deleteFinanceMovement, getAllFinanceMovement, getFinanceMovementById, updateFinanceMovement } 
from "../controllers/financeMovementController";

const financeMovementRouter = Router();

financeMovementRouter.get("/", getAllFinanceMovement);
financeMovementRouter.get("/:id", getFinanceMovementById);
financeMovementRouter.post("/", createFinanceMovement);
financeMovementRouter.put("/:id", updateFinanceMovement);
financeMovementRouter.delete("/:id", deleteFinanceMovement);

export default financeMovementRouter;