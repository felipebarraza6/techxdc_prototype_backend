import { Router } from 'express';
import {
  createModule,
  getAllModules,
  getModuleById,
  updateModule,
  deleteModule,
} from '../controllers/moduleController';
import { authenticateToken } from '../middlewares/authMiddleware';

const moduleRouter = Router();

moduleRouter.post('/', authenticateToken, createModule);
moduleRouter.get('/', authenticateToken, getAllModules);
moduleRouter.get('/:id', authenticateToken, getModuleById);
moduleRouter.put('/:id', authenticateToken, updateModule);
moduleRouter.delete('/:id', authenticateToken, deleteModule);

export default moduleRouter;
