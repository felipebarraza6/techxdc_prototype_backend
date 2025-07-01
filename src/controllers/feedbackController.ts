import { Request, Response } from 'express';
import * as feedbackService from '../services/feedbackServices';
import {
  CreateFeedbackRequest,
  UpdateFeedbackRequest,
} from '../types/feedbackTypes';

export const createFeedback = async (req: Request, res: Response) => {
  try {
    const data: CreateFeedbackRequest = req.body;
    const feedback = await feedbackService.createFeedback(data);
    return res.status(201).json(feedback);
  } catch (error) {
    console.error("Error creating feedback:", error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAllFeedbacks = async (_req: Request, res: Response) => {
  try {
    const feedbacks = await feedbackService.getAllFeedbacks();
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getFeedbackById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const feedback = await feedbackService.getFeedbackById(id);
    if (!feedback) return res.status(404).json({ error: 'Feedback not found' });
    return res.status(200).json(feedback);
  } catch (error) {
    console.error("Error fetching feedback by ID:", error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateFeedback = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data: UpdateFeedbackRequest = req.body;
    const feedback = await feedbackService.updateFeedback(id, data);
    if (!feedback) return res.status(404).json({ error: 'Feedback not found' });
    return res.status(200).json(feedback);
  } catch (error) {
    console.error("Error updating feedback:", error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteFeedback = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await feedbackService.deleteFeedback(id);
    if (!deleted) return res.status(404).json({ error: 'Feedback not found' });
    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting feedback:", error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getFeedbacksByClientId = async (req: Request, res: Response) => {
  try {
    const clientId = parseInt(req.params.clientId);
    const feedbacks = await feedbackService.getFeedbacksByClientId(clientId);
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedbacks by client ID:", error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};