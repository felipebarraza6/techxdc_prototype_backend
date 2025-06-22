import express from 'express';
import cors from 'cors';
import path from 'path';
import exampleRoutes from './routes/exampleRoutes';
import sequelize from './config/database';
import userRouter from './routes/userRoute';
import groupRouter from './routes/groupRoute';
import taskRouter from './routes/taskRoute';
import permissionRouter from './routes/permissionRoute';
import fileTypeRouter from './routes/fileTypeRoute';
import ticketRouter from './routes/TicketRoute';
import clientRouter  from './routes/clientRoute';
import contactRouter from './routes/contactRoute';
import fileRouter from './routes/fileRoute';
import moduleRouter from './routes/moduleRoute';
import statusTicketRouter from './routes/statusTicketRoute';

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/examples', exampleRoutes);
app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/permissions', permissionRouter);
app.use('/api/file-types', fileTypeRouter);
app.use('/api/groups', groupRouter);
app.use('/api/tickets', ticketRouter);
app.use('/api/clients', clientRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/modules', moduleRouter);
app.use('/api/files', fileRouter);
app.use('/api/status-tickets', statusTicketRouter); 


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
