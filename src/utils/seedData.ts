import sequelize from "../config/database";
import bcrypt from "bcryptjs";
import { UserRole } from "../types/userTypes";

// Importar todos los modelos necesarios
import Group from "../models/Group";
import User from "../models/User";
import Comuna from "../models/Comuna";
import Clients from "../models/Clients";
import Project from "../models/Projects";
import CatchmentPoint from "../models/CatchmentPoint";

// Importar las asociaciones
import { applyAssociations } from "../models/associations";

/**
 * 🌱 Script de seeding para crear datos de prueba
 * Respeta todas las relaciones y restricciones del proyecto
 */
export const seedDatabase = async () => {
  try {
    // Aplicar asociaciones
    applyAssociations();

    // 1. Crear Grupo
    const group = await Group.create({
      name: "Grupo de Desarrollo",
      description: "Grupo para desarrolladores y pruebas",
    });

    // 2. Crear Usuario
    const hashedPassword = await bcrypt.hash("password123", 10);
    const user = await User.create({
      username: "dev_user",
      email: "dev@techxdc.com",
      first_name: "Desarrollador",
      last_name: "Prueba",
      password: hashedPassword,
      is_verified: true,
      rol: UserRole.ADMIN,
      is_active: true,
      group_id: group.id,
    });

    // 3. Crear Comuna
    const comuna = await Comuna.create({
      name: "Santiago Centro",
      codeLocation: "13101",
    });

    // 4. Crear Cliente
    const client = await Clients.create({
      name: "Cliente de Prueba SPA",
      dni: "12345678-9",
      address: "Av. Providencia 1234, Santiago",
      comuna: comuna.id,
      phone: "+56912345678",
      industry: "Tecnología",
      status: "Activo",
      score: 85,
    });

    // 5. Crear Proyecto
    const project = await Project.create({
      clientId: client.id,
      codeInternal: "PROJ-001",
      name: "Proyecto de Prueba",
      description: "Proyecto para pruebas de desarrollo",
      comunaId: comuna.id,
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-12-31"),
      budgetEstimate: 1000000.0,
    });

    // 6. Crear Punto de Captación
    const catchmentPoint = await CatchmentPoint.create({
      projectId: project.id,
      title: "Punto de Captación Principal",
      ownerUser: user.id,
      id_api_telemetry: 114,
      code_dga: "12345678",
      token_api_telemetry: "22984860397712d467987e2ea66a9e64e45a9ea8",
    });

    console.log(
      "✅ Seeding completado. Credenciales: dev@techxdc.com / password123"
    );

    return {
      group,
      user,
      comuna,
      client,
      project,
      catchmentPoint,
    };
  } catch (error) {
    console.error("❌ Error durante el seeding:", error);
    throw error;
  }
};

/**
 * 🧹 Limpiar todos los datos de prueba
 */
export const clearSeedData = async () => {
  try {
    // Eliminar en orden inverso para respetar las foreign keys
    await CatchmentPoint.destroy({ where: {}, force: true });
    await Project.destroy({ where: {}, force: true });
    await Clients.destroy({ where: {}, force: true });
    await Comuna.destroy({ where: {}, force: true });
    await User.destroy({ where: {}, force: true });
    await Group.destroy({ where: {}, force: true });

    console.log("✅ Datos de prueba eliminados");
  } catch (error) {
    console.error("❌ Error limpiando datos:", error);
    throw error;
  }
};
