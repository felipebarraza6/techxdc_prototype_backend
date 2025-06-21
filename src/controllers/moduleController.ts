import { Request, Response } from 'express';
import * as moduleService from '../services/moduleService';
import {
  CreateModuleRequest,
  UpdateModuleRequest,
} from '../types/moduleTypes';

export const createModule = async (req: Request, res: Response) => {
  try {
    const data: CreateModuleRequest = req.body;
    const module = await moduleService.createModule(data);
    return res.status(201).json(module);
  } catch (error) {
    console.error('Error creating module:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
export const getAllModules = async (req: Request, res: Response) => {
  try {
    const modules = await moduleService.getAllModules();
    return res.status(200).json(modules);
  } catch (error) {
    console.error('Error fetching modules:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
export const getModuleById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const module = await moduleService.getModuleById(id);
    if (!module) {
      return res.status(404).json({ error: 'Module not found' });
    }
    return res.status(200).json(module);
  } catch (error) {
    console.error('Error fetching module:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
export const updateModule = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const data: UpdateModuleRequest = req.body;
    const updatedModule = await moduleService.updateModule(id, data);
    if (!updatedModule) {
      return res.status(404).json({ error: 'Module not found' });
    }
    return res.status(200).json(updatedModule);
  } catch (error) {
    console.error('Error updating module:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
export const deleteModule = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const deleted = await moduleService.deleteModule(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Module not found' });
    }
    return res.status(204).send();
  } catch (error) {
    console.error('Error deleting module:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}