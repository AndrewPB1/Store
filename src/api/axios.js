// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Añadir un interceptor para incluir el token en las solicitudes
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Supone que guardas el token en localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
