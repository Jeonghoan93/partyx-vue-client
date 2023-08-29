import { User } from 'src/types/user';
import api from '../index';

export const login = async (credentials: {
  email: string;
  password: string;
}): Promise<{
  user: User;
  token: string;
}> => {
  return await api.post('/users/authenticate', credentials);
};
