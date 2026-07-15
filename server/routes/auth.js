import express from "express";

import authController from "../controllers/authController.js";
import { validate } from "../middleware/validate.js";
import { registerSchema, loginSchema } from "../validators/authSchema.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/register",
    validate(registerSchema),
    authController.createUser_post
);

router.post("/login",
    validate(loginSchema),
    authController.login_post
);

router.get("/profile",
requireAuth,
authController.user_get
);

router.post("/logout", authController.logout_post);

export default router