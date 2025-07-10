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
import feedbackRouter from './routes/feedbackRoute';
import responseTicketRouter from './routes/responseTicketRoutes';
import { applyAssociations } from './models/associations';
import comunaRouter from './routes/comunaRoutes';
import projectRouter from './routes/projectRoutes'
import financeMovementRouter from './routes/financeMovementRoutes'
import quotationRouter from './routes/quotationRoutes';
import catchmentPointRouter from './routes/catchmentPointRoutes';
import customerProfileRouter from './routes/customerProfileRoute';
import clientModuleRouter from './routes/clientModuleRoute';
import typeContactRouter from './routes/typeContactRoutes';
import authRouter from './routes/authRoutes';
import swaggerUI from 'swagger-ui-express';
import swaggerDocumentation from './swagger.json'

applyAssociations(); // Aquí se aplican las asociaciones entre modelos

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/examples', exampleRoutes);
app.use("/api/auth", authRouter);
app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/permissions', permissionRouter);
app.use('/api/file-types', fileTypeRouter);
app.use('/api/groups', groupRouter);
app.use('/api/tickets', ticketRouter);
app.use('/api/clients', clientRouter);
app.use('/api/client-modules', clientModuleRouter);
app.use('/api/customer-profile', customerProfileRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/type-contacts', typeContactRouter);
app.use('/api/modules', moduleRouter);
app.use('/api/files', fileRouter);
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));
app.use('/api/status-tickets', statusTicketRouter); 
app.use('/api/feedbacks', feedbackRouter); 
app.use('/api/response-tickets', responseTicketRouter); 
app.use('/api/comunas', comunaRouter); 
app.use('/api/projects', projectRouter);  
app.use('/api/financeMovements', financeMovementRouter); 
app.use('/api/quotations', quotationRouter);  
app.use('/api/catchmentPoint', catchmentPointRouter); 


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
    
    await sequelize.sync({ alter: true });
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
