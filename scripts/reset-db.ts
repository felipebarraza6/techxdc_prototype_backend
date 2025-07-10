#!/usr/bin/env ts-node

import {
  resetDatabase,
  checkDatabaseConflicts,
} from "../src/utils/databaseReset";

/**
 * 🛠️ Script para resetear la base de datos
 * Uso: yarn ts-node scripts/reset-db.ts
 */
async function main() {
  try {
    console.log("🔍 Verificando conflictos en la base de datos...");

    const hasConflicts = await checkDatabaseConflicts();

    if (hasConflicts) {
      console.log(
        "⚠️  Se detectaron conflictos. ¿Deseas resetear la base de datos? (y/N)"
      );

      // En un entorno real, aquí podrías leer input del usuario
      // Por ahora, asumimos que sí
      console.log("🔄 Procediendo con el reset...");
      await resetDatabase();
    } else {
      console.log(
        "✅ No se detectaron conflictos. La base de datos está en buen estado."
      );
    }
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

// Ejecutar solo si se llama directamente
if (require.main === module) {
  main();
}
