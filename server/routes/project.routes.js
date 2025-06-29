import express from 'express';
import projectCtrl from '../controllers/project.controller.js';

const router = express.Router();

router.route('/api/projects')
  .post(projectCtrl.create)
  .get(projectCtrl.list);

router.param('projectId', projectCtrl.projectByID);

router.route('/api/projects/:projectId')
  .get(projectCtrl.read)
  .put(projectCtrl.update)
  .delete(projectCtrl.remove);

export default router;