# 🚀 ¡Proyecto Backend con Node.js, Express, TypeScript y SQLite!

¡Hola desarrollador! 👋 ¡Bienvenido a tu nuevo proyecto backend! Este es un proyecto configurado para que puedas empezar a desarrollar inmediatamente, ¡sin preocuparte por configuraciones complejas de base de datos!

## 🌟 Características Especiales

- 📱 **SQLite integrado** - ¡Base de datos lista para usar sin configuración!
- 🔷 **TypeScript** - ¡Código más seguro y mejor documentado!
- 🚂 **Express** - ¡API REST de forma sencilla!
- 🗃️ **Sequelize** - ¡ORM que funciona con SQLite y puede migrar a PostgreSQL!
- ✨ **ESLint** - ¡Código limpio y consistente!

## 💫 ¿Por qué SQLite?

¡Empezamos con SQLite porque es INCREÍBLE para desarrollo!
- 🚀 No necesitas instalar nada
- 📦 La base de datos es un archivo
- 🔄 Fácil de respaldar y versionar
- 💻 ¡Perfecta para desarrollo local!

## 📁 Estructura del Proyecto

```bash
src/
├── 🔧 config/          # Configuraciones
│   └── database.ts    # ¡Configuración de SQLite!
├── 📊 database/        # ¡Aquí vive tu base de datos SQLite!
├── 🎮 controllers/     # Controladores de la API
├── 📋 models/          # Modelos de Sequelize
├── 🛣️ routes/          # Rutas de la API
├── 🛡️ middlewares/     # Middlewares
└── 🔧 utils/           # Utilidades

```

## 🚀 ¡Comenzemos!

### 1️⃣ Instala todo
```bash
yarn
```

### 2️⃣ ¡Inicia el servidor!
```bash
yarn dev
```

¡Y eso es todo! 🎉 Tu base de datos SQLite se creará automáticamente en `src/database/development.sqlite`

## 📚 API de Ejemplo

Ya incluimos un ejemplo completo que puedes probar inmediatamente:

### 📥 Obtener ejemplos
```bash
GET http://localhost:3000/api/examples
```

### 📤 Crear ejemplo
```bash
POST http://localhost:3000/api/examples
Content-Type: application/json

{
  "name": "Mi Primer Ejemplo",
  "description": "¡Creado con SQLite!"
}
```

## 🛠️ Scripts Disponibles

- `yarn dev` - ¡Desarrollo con recarga automática!
- `yarn build` - ¡Compila para producción!
- `yarn start` - ¡Ejecuta en producción!
- `yarn lint` - ¡Revisa tu código!
- `yarn lint:fix` - ¡Arregla problemas de código!

## 🔄 Migración a PostgreSQL

Cuando estés listo para producción, migrar a PostgreSQL es sencillo:

1. Instala pg y pg-hstore:
```bash
yarn add pg pg-hstore
```

2. Actualiza la configuración en `src/config/database.ts`:
```typescript
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default sequelize;
```

## 💡 Tips para Desarrollo

1. 🔍 **Explora tu base de datos**: Usa una herramienta como "SQLite Browser" para ver tus datos
2. 🎨 **Mantén tus modelos simples**: Comienza con lo básico y expande según necesites
3. 🔄 **Usa migraciones**: Cuando tu esquema esté estable, crea migraciones para PostgreSQL
4. 🛡️ **Valida todo**: ¡Nunca confíes en los datos de entrada!

## 🤝 ¿Necesitas ayuda?

- 📱 [SQLite Documentation](https://www.sqlite.org/docs.html)
- 🚂 [Express Guide](https://expressjs.com/en/guide/routing.html)
- 🗃️ [Sequelize Documentation](https://sequelize.org/master/)
- 💻 [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🎉 ¡A Desarrollar!

¡Tu proyecto está listo para que empieces a crear! Recuerda:
- ✅ SQLite hace el desarrollo súper fácil
- ✅ Puedes ver tu base de datos en cualquier momento
- ✅ Migrar a PostgreSQL será sencillo cuando lo necesites
- ✅ ¡Concentráte en crear funcionalidades increíbles!

¡Feliz coding! 🚀
