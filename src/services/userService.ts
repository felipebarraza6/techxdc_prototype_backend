import User from "../models/User";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { CreateUserRequest } from '../types/userTypes';

export const UserService = {
    findAllUsers: async () => {
        return await User.findAll();
    },

    findUserById: async (id: number) => {
        return await User.findByPk(id);
    },

    createUser: async (userData: CreateUserRequest) => {
        if (!userData.group_id) {
            throw new Error("El usuario debe asignarse a un grupo");
        }
        if (!userData.password) {
            throw new Error("La contraseña es requerida");
        }
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const generateToken = (length = 32): string => {
            return crypto.randomBytes(length).toString('hex');
        }
        return await User.create({
            ...userData,
            password_hash: hashedPassword,
            verify_token: generateToken(),
            verify_token_expiration: new Date(Date.now() + 1000 * 60 * 60 * 24) // duración de 24 horas
        });
    },

    updateUser: async (id: number, userData: Partial<CreateUserRequest>) => {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        return await user.update(userData);
    },

    softDeleteUser: async (id: number) => {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        user.is_active = false;
        return await user.save();
    }
};
