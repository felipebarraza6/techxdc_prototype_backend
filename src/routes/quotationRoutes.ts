import { Router } from "express";
import { createQuotation, deleteQuotation, getAllQuotation, getQuotationById, updateQuotation } 
from "../controllers/quotationController";

const quotationRouter = Router();

quotationRouter.get("/", getAllQuotation);
quotationRouter.get("/:id", getQuotationById);
quotationRouter.post("/", createQuotation);
quotationRouter.put("/:id", updateQuotation);
quotationRouter.delete("/:id", deleteQuotation);

export default quotationRouter;