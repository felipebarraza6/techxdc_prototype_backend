import { Router } from "express";
import { createCatchmentPoint, deleteCatchmentPoint, getAllCatchmentPoint, getCatchmentPointById, updateCatchmentPoint } 
from "../controllers/catchmentPointController";

const catchmentPointRouter = Router();

catchmentPointRouter.get("/", getAllCatchmentPoint);
catchmentPointRouter.get("/:id", getCatchmentPointById);
catchmentPointRouter.post("/", createCatchmentPoint);
catchmentPointRouter.put("/:id", updateCatchmentPoint);
catchmentPointRouter.delete("/:id", deleteCatchmentPoint);

export default catchmentPointRouter;