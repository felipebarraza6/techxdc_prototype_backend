import { Router } from 'express';
import {
  createClientModule,
  getAllClientModules,
  getClientModuleById,
  updateClientModule,
  deleteClientModule,
  getClientModulesByClientId,
  getClientModulesByModuleId,
} from '../controllers/clientModuleController';
import { authenticateToken } from '../middlewares/authMiddleware';

const clientModuleRouter = Router();

clientModuleRouter.post('/', authenticateToken, createClientModule);
clientModuleRouter.get('/', authenticateToken, getAllClientModules);
clientModuleRouter.get('/:id', authenticateToken, getClientModuleById);
clientModuleRouter.put('/:id', authenticateToken, updateClientModule);
clientModuleRouter.delete('/:id', authenticateToken, deleteClientModule);

// Rutas para obtener por client_id y module_id
clientModuleRouter.get('/by-client/:clientId', authenticateToken, getClientModulesByClientId);
clientModuleRouter.get('/by-module/:moduleId', authenticateToken, getClientModulesByModuleId);

export default clientModuleRouter;