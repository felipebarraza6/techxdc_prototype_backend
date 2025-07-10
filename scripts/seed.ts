#!/usr/bin/env ts-node

import { seedDatabase, clearSeedData } from "../src/utils/seedData";
import sequelize from "../src/config/database";

/**
 * 🌱 Script de seeding para crear datos de prueba
 * Uso: yarn ts-node scripts/seed.ts [--clear]
 */
async function main() {
  try {
    const args = process.argv.slice(2);
    const shouldClear = args.includes("--clear");

    // Conectar a la base de datos
    await sequelize.authenticate();

    if (shouldClear) {
      await clearSeedData();
      console.log("✅ Datos de prueba eliminados");
    } else {
      await seedDatabase();
    }
  } catch (error) {
    console.error("❌ Error durante el seeding:", error);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

// Ejecutar solo si se llama directamente
if (require.main === module) {
  main();
}
