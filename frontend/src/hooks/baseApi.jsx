import axios from 'axios';

const baseApi = () => {
    const api = axios.create({
        baseURL: 'http://35.175.237.25:5000/',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });

    return api;
}

export default baseApi