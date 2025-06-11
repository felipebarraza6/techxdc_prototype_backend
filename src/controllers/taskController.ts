import { Request, Response } from "express";
import { TaskService } from "../services/taskService";
import { CreateTaskRequest } from "../types/taskTypes";
import { ApiResponse } from "../types/apiTypes";

export const getAllTasks = async (_req: Request, res: Response<ApiResponse>) => {
    try {
        const tasks = await TaskService.getAllTasks();
        return res.status(200).json({
            success: true,
            message: "Tareas obtenidas exitosamente",
            data: tasks,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener las tareas",
            error: error.message,
        });
    }
};

export const getTaskById = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const taskId = parseInt(req.params.id);
        const task = await TaskService.getTaskById(taskId);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Tarea no encontrada",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Tarea obtenida exitosamente",
            data: task,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener la tarea",
            error: error.message,
        });
    }
};

export const createTask = async (req: Request<{}, {}, CreateTaskRequest>, res: Response<ApiResponse>) => {
    try {
        const task = await TaskService.createTask(req.body);
        return res.status(201).json({
            success: true,
            message: "Tarea creada exitosamente",
            data: task,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al crear la tarea",
            error: error.message,
        });
    }
};

export const updateTask = async (req: Request<{ id: number }, {}, Partial<CreateTaskRequest>>, res: Response<ApiResponse>) => {
    try {
        const taskId = (req.params.id);
        const updatedTask = await TaskService.updateTask(taskId, req.body);
        return res.status(200).json({
            success: true,
            message: "Tarea actualizada exitosamente",
            data: updatedTask,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar la tarea",
            error: error.message,
        });
    }
};

export const deleteTask = async (req: Request<{ id: number }>, res: Response<ApiResponse>) => {
    try {
        const taskId = (req.params.id);
        await TaskService.deleteTask(taskId);
        return res.status(200).json({
            success: true,
            message: "Tarea eliminada exitosamente",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar la tarea",
            error: error.message,
        });
    }
};