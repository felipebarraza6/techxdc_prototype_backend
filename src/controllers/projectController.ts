import { Request, Response } from "express";
import { ProjectService } from "../services/projectService";
import { ApiResponse } from '../types/apiTypes';
import { CreateProjectRequest } from '../types/projectTypes';
import { formatError } from "../utils/formatError";
//import * as ClientService from "../services/clientService";

export const getAllProjects = async (_req: Request, res: Response<ApiResponse>) => {
    try {
        const project = await ProjectService.getAllProjects();
        return res.status(200).json({
            success: true,
            message: "Proyectos obtenidos exitosamente",
            data: project
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener Proyectos",
            error: formatError(error)
        });
    }
};

export const getProjectById = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const project = await ProjectService.getProjectById(id);
        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Proyecto no encontrado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Proyecto obtenido exitosamente",
            data: project
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener Proyecto",
            error: formatError(error)
        });
    }
};

export const createProject = async (req: Request<{}, {}, CreateProjectRequest>, res: Response<ApiResponse>) => {
    try {

        // const client1 = await ClientService.getClientById(req.body.clientId);
        // console.log('ClientID', req.body.clientId)
        // console.log('Client:', client1)
        const newProject = await ProjectService.createProject(req.body);
        return res.status(201).json({
            success: true,
            message: "Proyecto creado exitosamente",
            data: newProject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al crear Proyecto",
            error: formatError(error)
        });
    }
};

export const updateProject = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const updatedProject = await ProjectService.updateProject(id, req.body);
        if (!updatedProject) {
            return res.status(404).json({
                success: false,
                message: "Proyecto No Actualizado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Proyecto actualizado exitosamente",
            data: updatedProject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar Proyecto",
            error: formatError(error)
        });
    }
};

export const deleteProject = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const deletedProject = await ProjectService.deleteProject(id);
        if (!deletedProject) {
            return res.status(404).json({
                success: false,
                message: "Proyecto no Pudo Ser Eliminado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Proyecto eliminado exitosamente",
            data: deletedProject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar Proyecto",
            error: formatError(error)
        });
    }
};