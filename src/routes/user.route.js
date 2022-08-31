const router = require("express").Router();
const userController = require("../controllers/user.controller");
const { validId, validUser } = require("../middlewares/global.middleware");

router.post("/create", userController.create);
router.get("/", userController.findAll);
router.get("/:id", validId, validUser, userController.findById);
router.patch("/:id", validId, validUser, userController.update);

module.exports = router;
