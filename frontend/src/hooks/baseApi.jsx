import axios from 'axios'

console.log(import.meta.env.VITE_API_URL)
console.log(import.meta.env);


const baseApi = () => {
    const api = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });

    return api;
}

export default baseApi