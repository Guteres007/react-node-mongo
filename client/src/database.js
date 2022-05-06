const DOMAIN = "http://localhost:5000";

/**
 * 
 * @param url
 * @returns {Promise<*>}
 */
export const get = async (url) => {
    let json
    try {
        const response = await fetch(DOMAIN + url);
        json = await response.json();
        
    } catch (error) {
        console.log("error", error);
    }

    return json;
};