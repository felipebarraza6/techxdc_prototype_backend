import sequelize from "../config/database";

/**
 * 🔧 Helper para migraciones seguras
 * Este archivo contiene funciones para manejar cambios en la base de datos
 * sin perder datos existentes
 */

export const safeSync = async () => {
  try {
    // Sincronizar con alter: true para modificar tablas existentes
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("❌ Error durante la sincronización:", error);
    throw error;
  }
};

/**
 * 🛡️ Función para verificar la integridad de la base de datos
 */
export const checkDatabaseIntegrity = async () => {
  try {
    // Verificar conexión
    await sequelize.authenticate();
  } catch (error) {
    console.error("❌ Error verificando integridad:", error);
    throw error;
  }
};
