import { Router } from 'express';
import {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
} from '../controllers/clientController';
import { authenticateToken } from '../middlewares/authMiddleware';

const clientRouter = Router();
clientRouter.get('/',authenticateToken ,getAllClients);   
clientRouter.get('/:id', authenticateToken, getClientById);
clientRouter.post('/', createClient);
clientRouter.put('/:id', authenticateToken, updateClient);
clientRouter.delete('/:id', authenticateToken, deleteClient);

export default clientRouter;