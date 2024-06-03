import axios from 'axios';

console.log(import.meta.env.VITE_API_BASE_URL); 

const baseApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
});

export default baseApi;