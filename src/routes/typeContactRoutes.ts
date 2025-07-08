import { Router } from 'express';
import {
  createTypeContact,
  getAllTypeContacts,
  getTypeContactById,
  updateTypeContact,
  deleteTypeContact,
} from '../controllers/typeContactController';

const typeContactRouter = Router();

typeContactRouter.post('/', createTypeContact);
typeContactRouter.get('/', getAllTypeContacts);
typeContactRouter.get('/:id', getTypeContactById);
typeContactRouter.put('/:id', updateTypeContact);
typeContactRouter.delete('/:id', deleteTypeContact);

export default typeContactRouter;
