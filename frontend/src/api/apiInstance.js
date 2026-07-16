import axios from 'axios';

// This will automatically pick up the URL based on where it's running
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:9000/api";

const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default api;