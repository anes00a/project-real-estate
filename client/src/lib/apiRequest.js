import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://project-real-estate-backend-api.onrender.com",
  withCredentials: true,
});

export default apiRequest;
