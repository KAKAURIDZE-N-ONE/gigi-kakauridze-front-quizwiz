import axios from "axios";

export const authInstace = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
  withXSRFToken: true,
});
