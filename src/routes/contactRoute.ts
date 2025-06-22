import { Router } from 'express';
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
  getContactsByClientId,
  getContactsByType,
  getContactsByEmail,
  getContactsByPhone,
  getContactsByName,
  getContactsByCustomField
} from '../controllers/contactController';

const contactRouter = Router();

contactRouter.get('/', getAllContacts);
contactRouter.get('/:id', getContactById);
contactRouter.post('/', createContact);
contactRouter.put('/:id', updateContact);
contactRouter.delete('/:id', deleteContact);

// Extras
contactRouter.get('/client/:clientId', getContactsByClientId);
contactRouter.get('/type/:typeId', getContactsByType);
contactRouter.get('/search/email', getContactsByEmail);
contactRouter.get('/search/phone', getContactsByPhone);
contactRouter.get('/search/name', getContactsByName);
contactRouter.get('/search/custom', getContactsByCustomField);

export default contactRouter;
// Este archivo define las rutas para manejar contactos, incluyendo operaciones CRUD y filtros adicionales.