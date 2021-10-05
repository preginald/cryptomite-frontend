import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
