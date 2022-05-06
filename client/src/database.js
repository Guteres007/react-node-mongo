import axios from "axios";

const DOMAIN = "http://localhost:5000";
/**
 *
 * @param url
 * @returns {Promise<*>}
 */
export const get = async (url) => {
    const response = await axios.get(DOMAIN + url);
    return await response.data;

};

export const post = async (url, data) => {
    const response = await axios.post(DOMAIN + url, data);
    return await response.data;
};