import { Request, Response } from "express";
import {UserService} from "../services/UserService";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await UserService.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener los usuarios", error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUser(req.body);

    return res.status(201).json({message: 'Usuario creado exitosamente', user});
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear usuario', error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await UserService.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener el usuario", error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await UserService.updateUser(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.status(200).json({ message: "Usuario actualizado exitosamente", user });
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar el usuario", error });
  }
};