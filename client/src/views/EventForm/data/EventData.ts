import { reactive } from "vue";

const EventData = reactive({
  title: "",
  description: "",
  startDate: "",
  endDate: "",
  location: {
    address: "",
    city: "",
    state: "",
    country: "",
    zip_code: "",
    coordinates: [0, 0],
  },
  maxGuests: "",
  pricePerGuest: "",
  currency: "",
  amenities: [],
  musicGenres: [],
  partyRules: [],
  partyTheme: "",
  cancellationPolicy: "",
  images: [],
});

export default EventData;
