import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const baseURL = 'http://localhost:3000';

const api: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000, // abort req after 10 secs if not done
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default api;
