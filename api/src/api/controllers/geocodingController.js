const { getCoordinates } = require("../utils/geocoding");

const getGeocodingCoordinates = async (req, res) => {
  const { address } = req.body;

  try {
    const coordinates = getCoordinates(address);
    res.json({ coordinates });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getGeocodingCoordinates };
