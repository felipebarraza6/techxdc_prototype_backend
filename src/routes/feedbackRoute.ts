import { Router } from "express";
import {
  createFeedback,
  getAllFeedbacks,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
  getFeedbacksByClientId,
} from "../controllers/feedbackController";
import { authenticateToken } from '../middlewares/authMiddleware';

const feedbackRouter = Router();

feedbackRouter.get("/", authenticateToken, getAllFeedbacks); // GET todos los feedbacks
feedbackRouter.get("/:id", authenticateToken, getFeedbackById); // GET uno por id
feedbackRouter.get("/client/:client_id", authenticateToken, getFeedbacksByClientId); // GET feedbacks por client_id
feedbackRouter.post("/", authenticateToken, createFeedback); // POST nuevo feedback
feedbackRouter.put("/:id", authenticateToken, updateFeedback); // PUT actualiza feedback por id
feedbackRouter.delete("/:id", authenticateToken, deleteFeedback); // DELETE feedback por id

export default feedbackRouter;
