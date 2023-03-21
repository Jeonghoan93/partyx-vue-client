const express = require("express");
const router = express.Router();
// This route will be protected by the auth middleware,
// which ensures that only authenticated users can access it.
const { getHostById } = require("../controllers/hostController");

// GET /api/hosts/:id = get host by id
router.get("/:id", getHostById);

module.exports = router;
