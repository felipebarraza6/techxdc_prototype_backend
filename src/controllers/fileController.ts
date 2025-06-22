import {Request, Response} from 'express';
import {FileService} from '../services/fileService';
import { FileAttributes, FileCreationAttributes } from '../types/fileTypes';
import { ApiResponse } from '../types/apiTypes';
import { formatError } from '../utils/formatError';

export const getAllFiles = async (_req: Request, res: Response<ApiResponse<FileAttributes[]>>) => {
    try {
        const files = await FileService.getAllFiles();
        return res.status(200).json({
            success: true,
            message: "Archivos obtenidos exitosamente",
            data: files
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener los archivos", 
            error: formatError(error)
        });
    }
};

export const getFileById = async (req: Request, res: Response<ApiResponse<FileAttributes>>) => {
    try {
        const id = parseInt(req.params.id);
        const file = await FileService.getFileById(id);
        if (!file) {
            return res.status(404).json({
                success: false,
                message: "Archivo no encontrado"});
        }
        return res.status(200).json({
            success: true,
            message: "Archivo obtenido exitosamente",
            data: file
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener el archivo",
            error: formatError(error)
        });
    }
};

export const createFile = async (req: Request, res: Response<ApiResponse<FileAttributes>>) => {
    try {
        const fileData: FileCreationAttributes = req.body;
        const file = await FileService.createFile(fileData);
        return res.status(201).json({
            success: true,
            message: 'Archivo creado exitosamente', 
            data: file
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al crear el archivo',
            error: formatError(error)
        });
    }
};
export const updateFile = async (req: Request, res: Response<ApiResponse<FileAttributes>>) => {
    try {
        const id = parseInt(req.params.id);
        const fileData = req.body;
        const file = await FileService.updateFile(id, fileData);
        if (!file) {
            return res.status(404).json({
                success: false,
                message: "Archivo no encontrado"});
        }
        return res.status(200).json({
            success: true,
            message: "Archivo actualizado exitosamente", 
            data: file
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar el archivo",
            error: formatError(error)
        });
    }
};

export const deleteFile = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const file = await FileService.getFileById(id);
        if (!file) {
            return res.status(404).json({
                success: false,
                message: "Archivo no encontrado"});
        }
        await FileService.deleteFile(id);
        return res.status(200).json({
            success: true,
            message: "Archivo eliminado exitosamente"});
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar el archivo",
            error: formatError(error) 
        });
    }
};