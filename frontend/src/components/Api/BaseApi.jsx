import axios from 'axios';

const baseApi = axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://fantastic-space-halibut-6v5j5pqg7jqfrj5w-5000.app.github.dev/'
    // baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000',
});

export default baseApi;