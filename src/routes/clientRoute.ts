import { Router } from 'express';
import {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
} from '../controllers/clientController';

const clientRouter = Router();
clientRouter.get('/', getAllClients);   
clientRouter.get('/:id', getClientById);
clientRouter.post('/', createClient);
clientRouter.put('/:id', updateClient);
clientRouter.delete('/:id', deleteClient);

export default clientRouter;