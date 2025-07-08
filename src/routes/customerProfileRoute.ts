import { Router } from "express";
import { getAllCustomerProfiles, getCustomerProfileById, createCustomerProfile, updateCustomerProfile, deleteCustomerProfile } from "../controllers/customerProfileController";

const customerProfileRouter = Router();

customerProfileRouter.get("/", getAllCustomerProfiles);
customerProfileRouter.get("/:id", getCustomerProfileById);  
customerProfileRouter.post("/", createCustomerProfile);
customerProfileRouter.put("/:id", updateCustomerProfile);
customerProfileRouter.delete("/:id", deleteCustomerProfile);

export default customerProfileRouter;