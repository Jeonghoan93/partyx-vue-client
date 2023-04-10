// service files will be used to interact with the backend APIs
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // VUE_APP_API_BASE_URL
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
