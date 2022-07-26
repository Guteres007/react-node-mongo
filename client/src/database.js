import axios from "axios";

const DOMAIN = "http://localhost:5000";

const Api = {
  get: async (url) => {
    const response = await axios.get(DOMAIN + url);
    return await response.data;
  },

  post: async (url, data) => {
    const response = await axios.post(DOMAIN + url, data);
    return await response.data;
  },

  destroy: async (url, data) => {
    const response = await axios.delete(DOMAIN + url, data);
    return await response.data;
  },
};

export default Api;
