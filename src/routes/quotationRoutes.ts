import { Router } from "express";
import { createQuotation, deleteQuotation, getAllQuotation, getQuotationById, updateQuotation } 
from "../controllers/quotationController";
import { authenticateToken } from '../middlewares/authMiddleware';

const quotationRouter = Router();

quotationRouter.get("/", authenticateToken, getAllQuotation);
quotationRouter.get("/:id", authenticateToken, getQuotationById);
quotationRouter.post("/", authenticateToken, createQuotation);
quotationRouter.put("/:id", authenticateToken, updateQuotation);
quotationRouter.delete("/:id", authenticateToken, deleteQuotation);

export default quotationRouter;