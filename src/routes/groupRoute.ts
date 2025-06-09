import { Router } from "express";
import { getAllGroups, getGroupById, createGroup, updateGroup, deleteGroup } from "../controllers/groupController";
 
const groupRouter = Router(); 

groupRouter.get("/", getAllGroups);
groupRouter.get("/:id", getGroupById);
groupRouter.post("/", createGroup);
groupRouter.put("/:id", updateGroup);
groupRouter.delete("/:id", deleteGroup);

export default groupRouter;