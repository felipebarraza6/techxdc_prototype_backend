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

const clientModuleRouter = Router();

clientModuleRouter.post('/', createClientModule);
clientModuleRouter.get('/', getAllClientModules);
clientModuleRouter.get('/:id', getClientModuleById);
clientModuleRouter.put('/:id', updateClientModule);
clientModuleRouter.delete('/:id', deleteClientModule);

// Rutas para obtener por client_id y module_id
clientModuleRouter.get('/by-client/:clientId', getClientModulesByClientId);
clientModuleRouter.get('/by-module/:moduleId', getClientModulesByModuleId);

export default clientModuleRouter;