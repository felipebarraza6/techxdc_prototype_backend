import { Router } from 'express';
import {
  createModule,
  getAllModules,
  getModuleById,
  updateModule,
  deleteModule,
} from '../controllers/moduleController';

const moduleRouter = Router();

moduleRouter.post('/', createModule);
moduleRouter.get('/', getAllModules);
moduleRouter.get('/:id', getModuleById);
moduleRouter.put('/:id', updateModule);
moduleRouter.delete('/:id', deleteModule);

export default moduleRouter;
