import express from 'express';
import projectCtrl from '../controllers/project.controller.js';
import auth from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/projects')
   .post(auth.requireSignin, auth.isAdmin, projectCtrl.create)
  .get(projectCtrl.list);

router.param('projectId', projectCtrl.projectByID);

router.route('/api/projects/:projectId')
  .get(projectCtrl.read)
  .put(auth.requireSignin, auth.isAdmin, projectCtrl.update)
  .delete(auth.requireSignin, auth.isAdmin, projectCtrl.remove);

export default router;