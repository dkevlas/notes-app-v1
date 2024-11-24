import { Router } from "express";
import Register from '../controllers/Register.controller.js'
import { validateZod } from "../middlewares/validate.middleware.js";
import { RegisterValidator } from "../validators/Register.validator.js";

const router = Router();

router.post('/', validateZod(RegisterValidator), Register.createAccount);

export default router;
