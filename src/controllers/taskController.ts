import { Request, Response } from "express";
import { TaskService } from "../services/taskService";
import { CreateTaskRequest, TaskStatus } from "../types/taskTypes";
import { ApiResponse } from "../types/apiTypes";
import { formatError } from '../utils/formatError';

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
            error: formatError(error),
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
            error: formatError(error),
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
            error: formatError(error),
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
            error: formatError(error),
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
            error: formatError(error),
        });
    }
};

export const getTasksByStatus = async (req: Request<{ status: string }>, res: Response<ApiResponse>) => {
    try {
        const { status } = req.params;
        const allowedStatus: TaskStatus[] = Object.values(TaskStatus);
        if (!allowedStatus.includes(status as TaskStatus)) {
            return res.status(400).json({
                success: false,
                message: `Estado de tarea inválido: '${status}'`,
            });
        }
        const tasks = await TaskService.getTasksByStatus(status as TaskStatus);
        return res.status(200).json({
            success: true,
            message: "Tareas obtenidas exitosamente por estado",
            data: tasks,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener las tareas por estado",
            error: formatError(error),
        });
    }
}