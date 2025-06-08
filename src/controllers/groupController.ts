import { Request, Response } from "express";
import { GroupService } from "../services/groupService";

export const getAllGroups = async (_req: Request, res: Response) => {
    try {
        const groups = await GroupService.getAllGroups();
        return res.status(200).json(groups);
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener los grupos", error });
    }
};

export const getGroupById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const group = await GroupService.getGroupById(id);
        if (!group) {
            return res.status(404).json({ message: "Grupo no encontrado" });
        }
        return res.status(200).json(group);
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener el grupo", error });
    }
};

export const createGroup = async(req: Request, res: Response) => {
    try {
        const newGroup = await GroupService.createGroup(req.body);
        return res.status(201).json({ message: "Grupo creado exitosamente", newGroup });
    } catch (error) {
        return res.status(500).json({ message: "Error al crear el grupo", error });
    }
};

export const updateGroup = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const updatedGroup = await GroupService.updateGroup(id, req.body);
        if (!updatedGroup) {
            return res.status(404).json({ message: "Grupo no encontrado" });
        }
        return res.status(200).json({ message: "Grupo actualizado exitosamente", updatedGroup });
    } catch (error) {
        return res.status(500).json({ message: "Error al actualizar el grupo", error });
    }
};

export const deleteGroup = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const deleteGroup = await GroupService.deleteGroup(id);
        if (!deleteGroup) {
            return res.status(404).json({ message: "Grupo no encontrado" });
        }
        return res.status(200).json({ message: "Grupo eliminado exitosamente" });
    } catch (error) {
        return res.status(500).json({ message: "Error al eliminar el grupo", error });
    }
};