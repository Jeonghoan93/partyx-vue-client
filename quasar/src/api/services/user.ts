import { User } from 'src/types/user';
import api from '../index';
import { Event } from 'src/types/event';

export const fetchUserProfile = async (userId: string): Promise<User> => {
  return await api.get(`/user/${userId}`);
};

export const updateUserProfile = async (
  userId: string,
  data: any
): Promise<User> => {
  return await api.put(`/user/${userId}`, data);
};

export const fetchFavorites = async (
  userId: string
): Promise<{
  events: Event[];
}> => {
  return await api.get(`/user/${userId}/favorites`);
};
