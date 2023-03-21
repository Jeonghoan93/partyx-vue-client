const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const {
  createEvent,
  getEvents,
  getEventById,
  deleteEvent,
  updateEvent,
  uploadImage,
} = require("../controllers/eventController");
const { auth } = require("../middleware/auth");

router.route("/").get(auth, getEvents).post(auth, createEvent);

router
  .route("/:id")
  .get(auth, getEventById)
  .put(auth, updateEvent)
  .delete(auth, deleteEvent);

router.post("/:id/image", upload.single("image"), uploadImage);

module.exports = router;
