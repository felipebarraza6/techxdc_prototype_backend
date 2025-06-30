import { Request, Response } from 'express';
import * as moduleService from '../services/moduleService';
import {
  CreateModuleRequest,
  UpdateModuleRequest,
} from '../types/moduleTypes';
import { ApiResponse } from '../types/apiTypes';
import { formatError } from '../utils/formatError';

export const createModule = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const data: CreateModuleRequest = req.body;
    const module = await moduleService.createModule(data);
    return res.status(201).json({
      success: true,
      message: 'Módulo creado existosamente',
      data: module,
    });
  } catch (error) {
    console.error('Error creating module:', error);
    return res.status(500).json({
      success: false,
      message: 'Error al crear el módulo',
      error: formatError(error),
    });
  }
}
export const getAllModules = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const modules = await moduleService.getAllModules();
    return res.status(200).json({
      success: true,
      message: 'Módulos obtenidos exitosamente',
      data: modules,
    });
  } catch (error) {
    console.error('Error fetching modules:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Error al obtener los módulos',
      error: formatError(error),
    });
  }
}
export const getModuleById = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'ID inválido',
      });
    }
    const module = await moduleService.getModuleById(id);
    if (!module) {
      return res.status(404).json({ 
        success: false,
        message: 'Módulo no encontrado',
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Módulo obtenido exitosamente',
      data: module,
    });
  } catch (error) {
    console.error('Error fetching module:', error);
    return res.status(500).json({
      success: false,
      message: 'Error al obtener el módulo',
      error: formatError(error),
    });
  }
}
export const updateModule = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ 
        success: false,
        message: 'ID inválido',
      });
    }
    const data: UpdateModuleRequest = req.body;
    const updatedModule = await moduleService.updateModule(id, data);
    if (!updatedModule) {
      return res.status(404).json({ 
        success: false,
        message: 'Módulo no encontrado',
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Módulo actualizado exitosamente',
      data: updatedModule,
    });
  } catch (error) {
    console.error('Error updating module:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Error al actualizar el módulo',
      error: formatError(error),
    });
  }
}
export const deleteModule = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ 
        success: false,
        message: 'ID inválido',
      });
    }
    const deleted = await moduleService.deleteModule(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Módulo no encontrado',
      });
    }
    return res.status(204).send();
  } catch (error) {
    console.error('Error deleting module:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Error al eliminar el módulo',
      error: formatError(error),
    });
  }
}