const mongoose = require("mongoose");
const { getDefaultCurrency } = require("./utils");

const LocationSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zip_code: {
    type: String,
    required: true,
  },
  coordinates: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
      required: true,
    },
  },
});

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    location: {
      type: LocationSchema,
      required: true,
    },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    maxGuests: {
      type: Number,
      required: true,
    },
    pricePerGuest: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      enum: ["USD", "EUR", "SEK", "NOK", "DKK", "ISK"],
      default: getDefaultCurrency,
    },
    tags: [String],
    images: [String],
    amenities: [String],
    musicGenres: [String],
    partyRules: [String],
    partyTheme: String,
    cancellationPolicy: {
      type: String,
      enum: ["flexible", "moderate", "strict"],
      required: true,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
