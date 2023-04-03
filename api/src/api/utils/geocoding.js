const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client();

async function getCoordinates(address) {
  try {
    const res = await client.geocode({
      params: {
        address: address,
        key: process.env.GEO_API,
      },
    });

    if (res.data.results.length > 0) {
      const location = res.data.results[0].geometry.location;
      return [location.lat, location.lng];
    } else {
      throw new Error("Address not found");
    }
  } catch (err) {
    console.error("Error fetching coordinates: ", err);
    throw err;
  }
}

module.exports = { getCoordinates };
