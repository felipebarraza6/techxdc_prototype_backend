// src/controllers/authController.ts
import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ApiResponse } from "../types/apiTypes";
import { UserRole } from '../types/userTypes';
import { formatError } from "../utils/formatError";
import CatchmentPoint from "../models/CatchmentPoint";

const JWT_SECRET = process.env.JWT_SECRET || "claveSecreta";

export const login = async (req: Request, res: Response<ApiResponse>) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Correo o contraseña incorrectos",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: "Correo o contraseña incorrectos",
      });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: UserRole },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 🔍 Buscar puntos de captación donde el usuario es owner o viewer
    const catchmentPoints = await CatchmentPoint.findAll({
      include: [
        {
          model: User,
          as: "viewers",
          attributes: ["id"],
          through: { attributes: [] }
        }
      ]
    });

    const userPoints = catchmentPoints.filter(cp => {
      const viewerIds = cp.viewers?.map(v => v.id) || [];
      return cp.ownerUser === user.id || viewerIds.includes(user.id);
    });

    const formattedPoints = userPoints.map(cp => ({
      id: cp.id,
      title: cp.title
    }));

    return res.status(200).json({
      success: true,
      message: "Login exitoso",
      data: { token, catchmentPoints: formattedPoints },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: formatError(error),
    });
  }
};

export const logout = async (req: Request, res: Response<ApiResponse>) => {
  return res.status(200).json({
    success: true,
    message: "Sesión cerrada exitosamente",
  });
}
