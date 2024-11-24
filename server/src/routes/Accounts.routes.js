import { Router } from "express";
import  Account  from '../controllers/Account.controller.js'
const router = Router();

router.get('/', Account.getAccounts);
router.delete('/:id', Account.deleteAccount);

export default router;
