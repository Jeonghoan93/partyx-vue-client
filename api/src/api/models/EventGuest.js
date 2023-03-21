const mongoose = require("mongoose");

const EventGuestSchema = new mongoose.Schema({
  event: { type: Schema.Types.ObjectId, ref: "Event", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  status: {
    type: String,
    enum: ["pending", "accepted", "declined"],
    required: true,
  },
  booking_date: { type: Date, default: Date.now },
  payment_status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    required: true,
  },
  special_requests: String,
});

const EventGuest = mongoose.model("EventGuest", EventGuestSchema);
module.exports = EventGuest;
