import sequelize from "../config/database";
import fs from "fs";
import path from "path";

/**
 * 🗑️ Script para resetear la base de datos cuando hay conflictos de sincronización
 * ⚠️ ADVERTENCIA: Esto eliminará todos los datos existentes
 */
export const resetDatabase = async () => {
  try {
    // Obtener la ruta de la base de datos desde la configuración
    const dbPath = path.join(__dirname, "..", "database", "development.sqlite");

    // Verificar si el archivo existe
    if (fs.existsSync(dbPath)) {
      // Hacer backup antes de eliminar
      const backupPath = dbPath.replace(".sqlite", "_backup.sqlite");
      fs.copyFileSync(dbPath, backupPath);

      // Eliminar archivo de base de datos
      fs.unlinkSync(dbPath);
    }

    // Sincronizar modelos (creará nuevas tablas)
    await sequelize.sync({ force: true });
    console.log("✅ Base de datos reseteada exitosamente");
  } catch (error) {
    console.error("❌ Error durante el reset:", error);
    throw error;
  }
};

/**
 * 🔍 Verificar si hay conflictos en la base de datos
 */
export const checkDatabaseConflicts = async () => {
  try {
    await sequelize.authenticate();
    return false;
  } catch (error) {
    console.error("❌ Conflictos detectados:", error);
    return true;
  }
};
