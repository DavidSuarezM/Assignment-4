import express from 'express';
import educationCtrl from '../controllers/education.controller.js';
import auth from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/educations')
  .post(auth.requireSignin, auth.isAdmin, educationCtrl.create)
  .get(educationCtrl.list);

router.param('educationId', educationCtrl.educationByID);

router.route('/api/educations/:educationId')
  .get(educationCtrl.read)
  .put(auth.requireSignin, auth.isAdmin, educationCtrl.update)
  .delete(auth.requireSignin, auth.isAdmin, educationCtrl.remove);

export default router;