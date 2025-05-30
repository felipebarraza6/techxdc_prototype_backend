import express from 'express';
import cors from 'cors';
import path from 'path';
import exampleRoutes from './routes/exampleRoutes';
import sequelize from './config/database';

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/examples', exampleRoutes);

// Ruta de prueba
app.get('/', (_req, res) => {
  res.json({ 
    message: '¡Bienvenido a la API!',
    sqlite_path: path.join(__dirname, 'database', 'development.sqlite')
  });
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a SQLite establecida correctamente.');
    
    await sequelize.sync({ force: true });
    console.log('✅ Modelos sincronizados con SQLite.');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
      console.log(`📁 Base de datos SQLite en: ${path.join(__dirname, 'database', 'development.sqlite')}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
  }
};

startServer();
