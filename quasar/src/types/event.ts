import { Booking } from './booking';
import { User } from './user';

export interface Location {
  type: string;
  coordinates: number[];
  city?: string;
  state?: string;
  zipCode?: string;
  streetAddress?: string;
  country?: string;
}

export interface Host {
  id: string;
  name: string;
}

export interface Attendee {
  userId?: string;
  RSVPStatus?: string;
}

export interface Entertainment {
  entertainerId: string;
  startTime: Date;
  endTime: Date;
}

export interface Supply {
  supplyId: string;
  quantity: number;
}

export interface Event {
  title: string;
  description?: string;
  imageSrc?: string;
  position?: {
    lat: number;
    lng: number;
  };
  distance?: number;
  freeCancellation?: boolean;
  address?: string;
  price: number;
  date: Date;
  startTime: Date;
  endTime: Date;
  maxOccupancy: number;
  minOccupancy: number;
  location: Location;
  host: Host;
  theme?: string;
  music?: string[];
  eventImages?: string[];
  attendees?: Attendee[];
  entertainment?: Entertainment[];
  supplies?: Supply[];
  userId: string;
  createdAt?: Date;
  user?: User;
  reservations?: Booking[];
  eventTheme?: string[];
}

// If you'd want to handle promises for API calls:
export type EventResponsePromise = Promise<Event>;
