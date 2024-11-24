import { Router } from "express";
import { validateZod } from "../middlewares/validate.middleware.js";
import Login from "../controllers/Login.controller.js";
import { LoginValidator } from "../validators/Login.validator.js";

const router = Router();

router.post('/', validateZod(LoginValidator), Login.authAccount);

export default router;
