import express from 'express';
import contactCtrl from '../controllers/contact.controller.js';
import auth from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/contacts')
  .post(auth.requireSignin, auth.isAdmin, contactCtrl.create) // admin
  .get(contactCtrl.list); // all

router.param('contactId', contactCtrl.contactByID);

router.route('/api/contacts/:contactId')
  .get(contactCtrl.read) // all
  .put(auth.requireSignin, auth.isAdmin, contactCtrl.update)
  .delete(auth.requireSignin, auth.isAdmin, contactCtrl.remove);

export default router;