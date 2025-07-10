# Documentación de scripts (`package.json`)

Este archivo describe para qué sirve cada script disponible en el proyecto.

## Scripts disponibles

- **dev**: Inicia el servidor en modo desarrollo con recarga automática.
- **build**: Compila el proyecto TypeScript a JavaScript.
- **start**: Inicia el servidor desde el build de producción.
- **lint**: Analiza el código y muestra errores de estilo o sintaxis.
- **lint:fix**: Lint con autocorrección de errores simples.
- **reset-db**: Resetea completamente la base de datos (elimina y recrea todas las tablas, backup automático).
- **seed**: Pobla la base de datos con datos de prueba mínimos (usuario, grupo, cliente, proyecto, punto de captación).
- **seed:clear**: Elimina todos los datos de prueba creados por el seeder.
- **setup-dev**: Resetea la base de datos y luego ejecuta el seeder (flujo completo para desarrollo).

> **Recomendación:** Usa `setup-dev` para dejar tu entorno limpio y listo para pruebas. 