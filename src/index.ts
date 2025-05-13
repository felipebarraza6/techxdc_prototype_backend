import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
import CustomerProfile from './models/CustomerProfile'; // ejemplo de modelo
import { Request, Response } from 'express';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    res.send('API funcionando 🚀');
  });

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('🔗 Conectado a la base de datos');
    await sequelize.sync(); // { force: true } si querés resetear
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar la app:', error);
  }
}

startServer();
