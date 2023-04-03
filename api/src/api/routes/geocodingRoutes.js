const express = require("express");
const {
  getGeocodingCoordinates,
} = require("../controllers/geocodingController");

const router = express.Router();

router.post("/", getGeocodingCoordinates);

module.exports = router;
