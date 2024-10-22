import axios from 'axios';

const baseApi = () => {
    const baseURL =
        typeof window._env_ !== 'undefined' &&
        window._env_.VITE_API_URL &&
        window._env_.VITE_API_URL !== '%VITE_API_URL%'
            ? window._env_.VITE_API_URL
            : import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const api = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    console.log('VITE_API_URL from import.meta.env:', import.meta.env.VITE_API_URL);
    console.log('VITE_API_URL from window._env_:', window._env_ ? window._env_.VITE_API_URL : 'undefined');
    console.log('Final baseURL:', baseURL);

    return api;
};

export default baseApi;
