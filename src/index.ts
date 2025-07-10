import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/database";
import CustomerProfile from "./models/CustomerProfile"; // ejemplo de modelo
import { Request, Response } from "express";
import { safeSync, checkDatabaseIntegrity } from "./utils/migrationHelper";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("API funcionando 🚀");
});

async function startServer() {
  try {
    // 🔍 Verificar integridad de la base de datos
    await checkDatabaseIntegrity();

    // 🔒 Sincronización segura que no borra datos existentes
    await safeSync();

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
      console.log(`📁 Base de datos SQLite en: ${sequelize.getDatabaseName()}`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
  }
}

startServer();
