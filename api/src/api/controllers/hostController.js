const User = require("../models/User");

const getHostById = async (req, res) => {
  try {
    const host = await User.findById(req.params.id).select("-password");

    if (!host) {
      return res.status(404).json({ msg: "Host not found" });
    }

    res.json(host);
  } catch (err) {
    console.error(err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Host not found" });
    }

    res.status(500).send("Server error");
  }
};

module.exports = {
  getHostById,
};
