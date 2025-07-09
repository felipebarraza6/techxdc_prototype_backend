# Testing en TechXDC Backend

## Filosofía

- Los tests están organizados por **features** (módulos funcionales) en la carpeta `src/__tests__/modules/`.
- Cada archivo de test cubre los endpoints y lógica principal de un módulo (por ejemplo: autenticación, clientes, proyectos, etc).
- Se priorizan los **tests de integración** usando Supertest, simulando peticiones reales como lo haría el frontend.
- Si un feature requiere lógica compleja a nivel de modelo, se pueden agregar tests unitarios en el mismo archivo del módulo.

## Estructura

```
src/
  __tests__/
    modules/
      auth.test.ts      # Tests de autenticación (login, registro, validación de token)
      ...               # Otros features: client.test.ts, project.test.ts, etc.
    setup.ts            # Configuración global de tests (DB, datos de prueba)
```

## ¿Cómo correr los tests?

1. Instala dependencias (si no lo has hecho):
   ```bash
   yarn install
   ```
2. Ejecuta todos los tests:
   ```bash
   yarn test
   ```
3. Para ver cobertura:
   ```bash
   yarn test:coverage
   ```

## ¿Qué validan los tests?

- Que los endpoints respondan correctamente (códigos, estructura de respuesta, errores).
- Que los flujos principales (login, registro, acceso a recursos protegidos) funcionen como espera el frontend.
- Que los errores y validaciones sean claros y útiles para el cliente.

## Resultados

- Al correr los tests verás un resumen en consola con los tests pasados/fallidos.
- Si algún test falla, revisa el mensaje y la traza para identificar el problema.
- La cobertura de código se muestra en consola y en la carpeta `coverage/` (abre el HTML para ver detalles).

---

¿Dudas? Puedes agregar nuevos tests creando archivos en `src/__tests__/modules/` siguiendo el ejemplo de `auth.test.ts`.
