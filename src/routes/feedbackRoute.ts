import { Router } from "express";
import {
  createFeedback,
  getAllFeedbacks,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
  getFeedbacksByClientId,
} from "../controllers/feedbackController";

const feedbackRouter = Router();

feedbackRouter.get("/", getAllFeedbacks); // GET todos los feedbacks
feedbackRouter.get("/:id", getFeedbackById); // GET uno por id
feedbackRouter.get("/client/:client_id", getFeedbacksByClientId); // GET feedbacks por client_id
feedbackRouter.post("/", createFeedback); // POST nuevo feedback
feedbackRouter.put("/:id", updateFeedback); // PUT actualiza feedback por id
feedbackRouter.delete("/:id", deleteFeedback); // DELETE feedback por id

export default feedbackRouter;
