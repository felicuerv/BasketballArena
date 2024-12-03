import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const login = (mail, password) => {
  return axios.post(`${API_URL}/login`, { mail, password });
};

export const register = (mail, password) => {
  return axios.post(`${API_URL}/register`, { mail, password });
};
