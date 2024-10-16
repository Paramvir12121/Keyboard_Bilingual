import axios from 'axios';

const baseApi = () => {
    const api = axios.create({
        // get the base url from the .env file for vite
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    console.log("VITE API URL",import.meta.env.VITE_API_URL);

    return api;
}

export default baseApi