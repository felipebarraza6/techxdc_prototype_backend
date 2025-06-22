import { Response } from "express";
import { UserService } from '../services/userService';
import { CreateUserRequest } from '../types/userTypes';
import { ApiResponse } from '../types/apiTypes';
import { AuthRequest } from '../types/authTypes';
import { formatError } from "../utils/formatError";


export const getUsers = async (_req: AuthRequest, res: Response<ApiResponse>) => {
    try {
        const users = await UserService.findAllUsers();
        return res.status(200).json({
            success: true,
            message: 'Usuarios obtenidos exitosamente',
            data: users,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener los usuarios",
            error: formatError(error)
        });
    }
};

export const createUser = async (req: AuthRequest<{}, ApiResponse, CreateUserRequest>, res: Response<ApiResponse>) => {
    try {
        const newUser = await UserService.createUser(req.body);

        return res.status(201).json({
            success: true,
            message: 'Usuario creado exitosamente',
            data: newUser
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al crear usuario',
            error: formatError(error),
        });
    }
};

export const getUserById = async (req: AuthRequest<{ id: string }>, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const user = await UserService.findUserById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Usuario obtenido exitosamente",
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener el usuario",
            error: formatError(error)
        });
    }
};

export const updateUser = async (req: AuthRequest<{ id: string }, ApiResponse, Partial<CreateUserRequest>>, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const updateUser = await UserService.updateUser(id, req.body);
        if (!updateUser) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Usuario actualizado exitosamente",
            data: updateUser,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar el usuario",
            error: formatError(error)
        });
    }
};

export const deleteUser = async (req: AuthRequest<{ id: string }>, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const user = await UserService.findUserById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }
        await UserService.softDeleteUser(id);
        return res.status(200).json({
            success: true,
            message: "Usuario eliminado(inactivo) exitosamente"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar el usuario",
            error: formatError(error)
        });
    }
};
