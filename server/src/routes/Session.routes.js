import { Router } from "express";
import SessionController from "../controllers/Session.controller.js";

const router = Router();
router.get('/logout', SessionController.logout);

export default router;
