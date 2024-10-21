import axios from 'axios';




const baseApi = () => {
    const api = axios.create({
        // get the base url from the .env file for vite
        baseURL: window._env_.VITE_API_URL || 'http://localhost:5000',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    console.log("VITE API URL",import.meta.env.VITE_API_URL);
    console.log("VITE API URL 1", window._env_.VITE_API_URL);
    console.log("window._env_", window._env_);
    console.log("VITE_API_URL3", window._env_.VITE_API_URL);

    return api;
}

export default baseApi