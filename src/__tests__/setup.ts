import sequelize from "../config/database";
import { User } from "../models/User";
import { Clients as Client } from "../models/Clients";
import { Contacts as Contact } from "../models/Contacts";
import { Projects as Project } from "../models/Projects";
import { Task } from "../models/Task";
import { Tickets as Ticket } from "../models/Tickets";
import { Modules as Module } from "../models/Modules";
import { Permission } from "../models/Permission";
import { Group } from "../models/Group";

// Configuración global para tests
beforeAll(async () => {
  // Sincronizar base de datos para tests
  await sequelize.sync({ force: true });

  // Crear datos de prueba básicos
  await createTestData();
});

afterAll(async () => {
  // Cerrar conexión de base de datos
  await sequelize.close();
});

// Función para crear datos de prueba
async function createTestData() {
  try {
    // Crear usuario de prueba
    await User.create({
      username: "testuser",
      email: "test@example.com",
      password: "password123",
      role: "admin",
    });

    // Crear cliente de prueba
    await Client.create({
      name: "Test Client",
      email: "client@test.com",
      phone: "123456789",
      address: "Test Address",
    });

    // Crear módulo de prueba
    await Module.create({
      name: "Test Module",
      description: "Test module description",
      is_active: true,
    });

    console.log("✅ Datos de prueba creados exitosamente");
  } catch (error) {
    console.error("❌ Error creando datos de prueba:", error);
  }
}

// Configuración global de Jest
global.testTimeout = 10000;
