import Task from '../models/Task';
import User from '../models/User';
import { CreateTaskRequest, TaskStatus } from '../types/taskTypes';

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
        const newTaskData = {
            ...taskData,
            status: taskData.status ?? TaskStatus.PENDING, 
        };
        return await Task.create(newTaskData);
    },

    updateTask: async (id: number, taskData: Partial<CreateTaskRequest>) => {
        const task = await Task.findByPk(id);
        if (task) {
            return await task.update(taskData);
        }
        throw new Error('Tarea no encontrada');
    },

    deleteTask: async (id: number) => {
        const task = await Task.findByPk(id);
        if (task) {
            return await task.destroy();
        }
        throw new Error('Tarea no encontrada');
    },

    getTasksByStatus: async (status: TaskStatus) => {
        return await Task.findAll({
            where: { status },
            include: [{model: User, as: 'creator', attributes: ['id', 'username', 'email']}],
        });
    } 
}
