import { Router } from "express";
const router = Router();

// Controllers
import { indexWelcome } from "./../controllers/index.controller";

router.get('/', indexWelcome)

export default router;