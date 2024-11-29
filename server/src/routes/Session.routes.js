import { Router } from "express";
import SessionController from "../controllers/Session.controller.js";

const router = Router();
router.post('/logout', SessionController.logout);
router.get('/verify-token', SessionController.verifyToken);

export default router;
