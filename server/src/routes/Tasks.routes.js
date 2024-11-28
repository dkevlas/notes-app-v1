import { Router } from 'express'
import Tasks from '../controllers/Tasks.controller.js';
import { validateZod } from '../middlewares/validate.middleware.js';
import { TaskValidator } from '../validators/Task.validator.js';

const router = Router();

router.get('/', Tasks.getTasks);
router.post('/', validateZod(TaskValidator), Tasks.createTask);
router.put('/:id', validateZod(TaskValidator), Tasks.updateTask);
router.delete('/:id', Tasks.deleteTask);

export default router;
