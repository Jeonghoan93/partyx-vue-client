import { Booking } from './booking';
import { Event } from './event';

export enum UserTypes {
  ADMIN = 'admin',
  GUEST = 'guest',
  HOST = 'host',
}

export interface Address {
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

export interface SocialMediaLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

export interface PaymentDetails {
  cardNumber?: string;
  expiryDate?: Date;
  cvv?: string;
  billingAddress?: string;
}

export interface Preferences {
  eventType?: string[];
  musicGenre?: string[];
}

export interface User {
  success: boolean;
  message: string;
  result: any;
  email: string;
  password?: string; // This should ideally not be present in frontend models for security reasons
  hashedPassword?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  address?: Address;
  phone?: string;
  bio?: string;
  profilePicture?: string;
  isVerified?: boolean;
  role?: string;
  socialMediaLinks?: SocialMediaLinks;
  paymentDetails?: PaymentDetails;
  eventHosted?: string[];
  eventAttended?: string[];
  ratingsReceived?: number[];
  reviewsReceived?: string[];
  isActive?: boolean;
  preferences?: Preferences;
  type?: UserTypes;
  createdAt?: Date;
  updatedAt?: Date;
  emailVerified?: boolean;
  bookings?: Booking[];
  events?: Event[];
  favoriteEvents?: Event[];
}

// If you'd want to handle promises for API calls:
export type UserResponsePromise = Promise<User>;
