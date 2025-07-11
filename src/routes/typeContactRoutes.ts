import { Router } from 'express';
import {
  createTypeContact,
  getAllTypeContacts,
  getTypeContactById,
  updateTypeContact,
  deleteTypeContact,
} from '../controllers/typeContactController';
import { authenticateToken } from '../middlewares/authMiddleware';

const typeContactRouter = Router();

typeContactRouter.post('/', authenticateToken, createTypeContact);
typeContactRouter.get('/', authenticateToken, getAllTypeContacts);
typeContactRouter.get('/:id', authenticateToken, getTypeContactById);
typeContactRouter.put('/:id', authenticateToken, updateTypeContact);
typeContactRouter.delete('/:id', authenticateToken, deleteTypeContact);

export default typeContactRouter;
