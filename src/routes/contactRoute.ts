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
import { authenticateToken } from '../middlewares/authMiddleware';

const contactRouter = Router();

contactRouter.get('/', authenticateToken, getAllContacts);
contactRouter.get('/:id', authenticateToken, getContactById);
contactRouter.post('/', authenticateToken, createContact);
contactRouter.put('/:id', authenticateToken, updateContact);
contactRouter.delete('/:id', authenticateToken, deleteContact);

// Extras
contactRouter.get('/client/:clientId', authenticateToken, getContactsByClientId);
contactRouter.get('/type/:typeId', authenticateToken, getContactsByType);
contactRouter.get('/search/email', authenticateToken, getContactsByEmail);
contactRouter.get('/search/phone', authenticateToken, getContactsByPhone);
contactRouter.get('/search/name', authenticateToken, getContactsByName);
contactRouter.get('/search/custom', authenticateToken, getContactsByCustomField);

export default contactRouter;
// Este archivo define las rutas para manejar contactos, incluyendo operaciones CRUD y filtros adicionales.