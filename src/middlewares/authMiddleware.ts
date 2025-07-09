// src/middlewares/authMiddleware.ts
import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest, AuthUser } from "../types/authTypes";

const JWT_SECRET = process.env.JWT_SECRET || "claveSecreta";

export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token no proporcionado",
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AuthUser;
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Error al verificar token JWT:", err);
    return res.status(403).json({
      success: false,
      message: "Token inválido o expirado",
    });
  }
};
