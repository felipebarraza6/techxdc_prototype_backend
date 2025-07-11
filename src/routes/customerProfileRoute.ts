import { Router } from "express";
import { getAllCustomerProfiles, getCustomerProfileById, createCustomerProfile, updateCustomerProfile, deleteCustomerProfile } from "../controllers/customerProfileController";
import { authenticateToken } from '../middlewares/authMiddleware';

const customerProfileRouter = Router();

customerProfileRouter.get("/", authenticateToken, getAllCustomerProfiles);
customerProfileRouter.get("/:id", authenticateToken, getCustomerProfileById);  
customerProfileRouter.post("/", authenticateToken, createCustomerProfile);
customerProfileRouter.put("/:id", authenticateToken, updateCustomerProfile);
customerProfileRouter.delete("/:id", authenticateToken, deleteCustomerProfile);

export default customerProfileRouter;