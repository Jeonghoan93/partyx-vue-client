const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");
const {
  registerValidation,
  loginValidation,
} = require("../validators/userValidator");

router.post("/register", registerValidation, registerUser);
router.post("/login", loginValidation, loginUser);

// get a user profile
router.get("/:id", (req, res) => {
  // TODO
});

// update
router.get("/:id", (req, res) => {
  // TODO
});

module.exports = router;
