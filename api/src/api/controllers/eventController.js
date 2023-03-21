const Event = require("../models/Event");
const cloudinary = require("../../config/cloudinaryConfig");

const createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    newEvent.host = req.user.id; // Assuming the user is authenticated and their ID is in req.user.id
    await newEvent.save();
    res.status(201).json({
      success: true,
      data: newEvent,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error creating event",
      error: err.message,
    });
  }
};

//  $regex operator is used for case-insensitive partial matching on the title and location fields.
//  query parameters search, location, startDate, and endDate to filter events based on title, location, and date range
// users can search and filter events based on their preferences.
const listEvents = async (req, res) => {
  try {
    const { search, location, startDate, endDate } = req.query;
    const searchQuery = {};

    if (search) {
      searchQuery.title = { $regex: search, $options: "i" };
    }

    if (location) {
      searchQuery.location = { $regex: location, $options: "i" };
    }

    if (startDate && endDate) {
      searchQuery.statDate = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    } else if (startDate) {
      searchQuery.startDate = { $gte: new Date(startDate) };
    } else if (endDate) {
      searchQuery.endDate = { $lte: new Date(endDate) };
    }

    const events = await Event.find(searchQuery).sort({ startDate: -1 });
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error fetching events",
      error: err.message,
    });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }
    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error fetching event",
      error: err.message,
    });
  }
};

const updateEvent = async (req, res) => {
  const eventFields = { ...req.body };

  try {
    let event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    // Check if the user is the host
    if (event.host.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        msg: "User not authorized, user must be host",
      });
    }

    event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { $set: eventFields },
      { new: true, runValidator: true }
    );

    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error updating event",
      error: err.message,
    });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    // Check if the user is the host
    if (event.host.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        msg: "User not authorized",
      });
    }

    await event.remove();

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error deleting event",
      error: err.message,
    });
  }
};

const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(
      req.file.buffer.toString("base64"),
      {
        resource_type: "image",
        public_id: `partyx/events/${req.params.id}`,
        overwrite: true,
      }
    );

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { image: result.secure_url },
      { new: true }
    );

    res.json(updatedEvent);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = {
  createEvent,
  listEvents,
  getEventById,
  getEvents,
  updateEvent,
  deleteEvent,
  uploadImage,
};
