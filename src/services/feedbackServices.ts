
import Feedback from '../models/Feedback';
import { CreateFeedbackRequest, UpdateFeedbackRequest } from '../types/feedbackTypes';

export const createFeedback = async (data: CreateFeedbackRequest) => {
  const newFeedback = await Feedback.create(data);
  return newFeedback;
};

export const getAllFeedbacks = async () => {
  const feedbacks = await Feedback.findAll();
  return feedbacks;
};

export const getFeedbackById = async (id: number) => {
  const feedback = await Feedback.findByPk(id);
  return feedback;
};

export const updateFeedback = async (id: number, data: UpdateFeedbackRequest) => {
  const feedback = await Feedback.findByPk(id);
  if (!feedback) throw new Error('Feedback not found');

  await feedback.update(data);
  return feedback;
};

export const deleteFeedback = async (id: number) => {
  const feedback = await Feedback.findByPk(id);
  if (!feedback) throw new Error('Feedback not found');

  await feedback.destroy();
  return { message: 'Feedback deleted successfully' };
};
export const getFeedbacksByClientId = async (clientId: number) => {
  const feedbacks = await Feedback.findAll({
    where: { client_id: clientId },
  });
  return feedbacks;
};
