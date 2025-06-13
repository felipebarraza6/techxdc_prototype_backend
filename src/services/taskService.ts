import Task from '../models/Task';
import User from '../models/User';
import { CreateTaskRequest } from '../types/taskTypes';

export const TaskService = {
    getAllTasks: async () => {
        return await Task.findAll({
            include: [{model: User, as: 'creator', attributes: ['id', 'username', 'email']}],
        });
    },

    getTaskById: async (id: number) => {
        return await Task.findByPk(id, {
            include: [{model: User, as: 'creator', attributes: ['id', 'username', 'email']}],
        });
    },

    createTask: async (taskData: CreateTaskRequest) => {
        return await Task.create(taskData);
    },
    updateTask: async (id: number, taskData: Partial<CreateTaskRequest>) => {
        const task = await Task.findByPk(id);
        if (!task) {
            throw new Error('Tarea no encontrada');
        }
        return await task.update(taskData);
    },
    deleteTask: async (id: number) => {
        const task = await Task.findByPk(id);
        if (!task) {
            throw new Error('Tarea no encontrada');
        }
        return await task.destroy();
    },
}