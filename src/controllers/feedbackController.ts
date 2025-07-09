import { Request, Response } from 'express';
import * as feedbackService from '../services/feedbackServices';
import {
  CreateFeedbackRequest,
  UpdateFeedbackRequest,
} from '../types/feedbackTypes';
import { ApiResponse } from '../types/apiTypes';
import { formatError } from '../utils/formatError';

export const createFeedback = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const data: CreateFeedbackRequest = req.body;
    const feedback = await feedbackService.createFeedback(data);
    return res.status(201).json({
      success: true,
      message: 'Feedback creado exitosamente',
      data: feedback,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error al crear feedback',
      error: formatError(error),
    });
  }
};

export const getAllFeedbacks = async (_req: Request, res: Response<ApiResponse>) => {
  try {
    const feedbacks = await feedbackService.getAllFeedbacks();
    return res.status(200).json({
      success: true,
      message: 'Feedbacks obtenidos exitosamente',
      data: feedbacks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error al obtener los feedbacks',
      error: formatError(error),
    });
  }
};

export const getFeedbackById = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = parseInt(req.params.id);
    const feedback = await feedbackService.getFeedbackById(id);
    if (!feedback) return res.status(404).json({
      success: false,
      message: 'Feedback no encontrado',
      error: 'No se encontró feedback con el ID proporcionado',
    });
    return res.status(200).json({
      success: true,
      message: 'Feedback obtenido exitosamente',
      data: feedback,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error al obtener el feedback',
      error: formatError(error),
    });
  }
};

export const updateFeedback = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = parseInt(req.params.id);
    const data: UpdateFeedbackRequest = req.body;
    const feedback = await feedbackService.updateFeedback(id, data);
    if (!feedback) return res.status(404).json({
      success: false,
      message: 'Feedback no encontrado',
      error: 'No se pudo actualizar el feedback con el ID proporcionado',
    });
    return res.status(200).json({
      success: true,
      message: 'Feedback actualizado exitosamente',
      data: feedback,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error al actualizar el feedback',
      error: formatError(error),
    });
  }
};

export const deleteFeedback = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await feedbackService.deleteFeedback(id);
    if (!deleted) return res.status(404).json({
      success: false,
      message: 'Feedback no encontrado',
      error: 'No se pudo eliminar el feedback con el ID proporcionado',
    });
    return res.status(204).send({
      success: true,
      message: 'Feedback eliminado exitosamente',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error al eliminar el feedback',
      error: formatError(error),
    });
  }
};

export const getFeedbacksByClientId = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const clientId = parseInt(req.params.clientId);
    const feedbacks = await feedbackService.getFeedbacksByClientId(clientId);
    return res.status(200).json({
      success: true,
      message: 'Feedbacks obtenidos exitosamente por clientId',
      data: feedbacks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error al obtener los feedbacks por clientId',
      error: formatError(error),
    });
  }
};