import { User } from './user';
import { Event } from './event';

export interface Booking {
  listingId: string;

  startDate: Date;
  endDate: Date;
  totalPrice: number;

  createdAt: Date;
  updatedAt: Date;
  event: Event;
  user: User;
}

// If you'd want to handle promises for API calls:
export type ReservationResponsePromise = Promise<Booking>;
