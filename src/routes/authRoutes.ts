// src/routes/authRoutes.ts
import express from "express";
import { login, logout } from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;
