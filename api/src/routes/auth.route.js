import express from "express";
import {
  test,
  signUp,
  signIn,
  getUser,
  deleteUser,
  getAllUser,
  updatedUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.post("/register", signUp);
router.post("/login", signIn);
router.get("/all-users", getAllUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updatedUser);

export default router;
