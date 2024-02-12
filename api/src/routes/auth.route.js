import express from "express";
import { createUser, test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.post("/register", createUser);

export default router;
