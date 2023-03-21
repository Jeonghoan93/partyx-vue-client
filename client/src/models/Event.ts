interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  coordinates: [number, number];
}

interface Event {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: Location;
  maxGuests: number;
  pricePerGuest: number;
  currency: string;
  amenities: string[];
  musicGenres: string[];
  partyRules: string[];
  partyTheme: string;
  cancellationPolicy: string;
  images: string[];
  createdAt?: string;
  updatedAt?: string;
}

export default Event;
