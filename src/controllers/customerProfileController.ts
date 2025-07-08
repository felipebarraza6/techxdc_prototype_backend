import {Request, Response} from 'express';
import {CustomerProfileService} from '../services/customerProfileService';
import { ApiResponse } from '../types/apiTypes';
import { formatError } from '../utils/formatError';

export const getAllCustomerProfiles = async (_req: Request, res: Response<ApiResponse>) => {
    try {
        const profiles = await CustomerProfileService.getAllCustomerProfiles();
        return res.status(200).json({
            success: true,
            message: "Perfiles de clientes obtenidos exitosamente",
            data: profiles
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener los perfiles de cliente",
            error: formatError(error)
        });
    }
};

export const getCustomerProfileById = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const profile = await CustomerProfileService.getCustomerProfileById(id);
        if (!profile) {
            return res.status(404).json({
                success: false,
                message: "Perfil de cliente no encontrado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Perfil de cliente obtenido exitosamente",
            data: profile
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener el perfil de cliente",
            error: formatError(error)
        });
    }
};

export const createCustomerProfile = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const profileData = req.body;
        const profile = await CustomerProfileService.createCustomerProfile(profileData);
        return res.status(201).json({
            success: true,
            message: 'Perfil de cliente creado exitosamente',
            data: profile
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al crear el perfil de cliente',
            error: formatError(error)
        });
    }
};

export const updateCustomerProfile = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        const profileData = req.body;
        const profile = await CustomerProfileService.updateCustomerProfile(id, profileData);
        if (!profile) {
            return res.status(404).json({
                success: false,
                message: "Perfil de cliente no encontrado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Perfil de cliente actualizado exitosamente",
            data: profile
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar el perfil de cliente",
            error: formatError(error)
        });
    }
};

export const deleteCustomerProfile = async (req: Request, res: Response<ApiResponse>) => {
    try {
        const id = parseInt(req.params.id);
        await CustomerProfileService.deleteCustomerProfile(id);
        return res.status(204).json({
            success: true,
            message: "Perfil de cliente eliminado exitosamente"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar el perfil de cliente",
            error: formatError(error)
        });
    }
};
