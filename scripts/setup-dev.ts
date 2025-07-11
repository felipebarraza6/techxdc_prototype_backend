#!/usr/bin/env ts-node

import { resetDatabase } from "../src/utils/databaseReset";
import { seedDatabase } from "../src/utils/seedData";
import sequelize from "../src/config/database";

/**
 * 🛠️ Script completo de setup para desarrollo
 * Combina reset de base de datos + seeding
 * Uso: yarn ts-node scripts/setup-dev.ts
 */
async function main() {
  try {
    // Paso 1: Reset de base de datos
    await resetDatabase();

    // Paso 2: Seeding de datos
    await seedDatabase();

    console.log(
      "✅ Setup completado. Credenciales: dev@techxdc.com / password123"
    );
  } catch (error) {
    console.error("❌ Error durante el setup:", error);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

// Ejecutar solo si se llama directamente
if (require.main === module) {
  main();
}
