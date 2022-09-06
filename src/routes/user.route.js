import express from "express";
import userController from "../controllers/user.controller.js";
import { validId, validUser } from "../middlewares/global.middleware.js";

const router = express.Router()

router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id", validId, validUser, userController.findById);
router.patch("/:id", validId, validUser, userController.update);

export default router;
