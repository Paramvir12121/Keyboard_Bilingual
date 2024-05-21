import axios from 'axios';

const baseApi = axios.create({
    baseURL: 'http://localhost:5000'
    // baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000',
});

export default baseApi;