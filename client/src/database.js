import axios from "axios";

const DOMAIN = "http://localhost:5000";

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [DOMAIN];
    const token = localStorage.getItem("token");
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Api = {
  get: async (url) => {
    const response = await axios.get(DOMAIN + url);
    return await response.data;
  },

  post: async (url, data) => {
    const response = await axios.post(DOMAIN + url, data);
    return await response.data;
  },

  delete: async (url, data) => {
    const response = await axios.delete(DOMAIN + url, data);
    return await response.data;
  },
};

export default Api;
