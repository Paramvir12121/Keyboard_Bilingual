   


import axios from 'axios';

const baseApi = () => {
    //  const baseURL =
    //     window._env_ && window._env_.VITE_API_URL
    //         ? window._env_.VITE_API_URL
    //         : 'https://backend-service-4r3uedulzq-ue.a.run.app';


    // for local testing use the following
    // const baseURL =
    //     typeof window._env_ !== 'undefined' &&
    //     window._env_.VITE_API_URL &&
    //     window._env_.VITE_API_URL !== '%VITE_API_URL%'
    //         ? window._env_.VITE_API_URL
    //         : import.meta.env.VITE_API_URL || 'https://backend-service-743073512588.us-east1.run.app';

    const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    

    const api = axios.create({
        baseURL,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    // api.interceptors.response.use(
    //     (response) => response,
    //     async (error) => {
    //         const originalRequest = error.config;
            
    //         // If error is 401 and we haven't tried refreshing yet
    //         if (error.response.status === 401 && !originalRequest._retry) {
    //             originalRequest._retry = true;
                
    //             try {
    //                 // Call your token refresh endpoint
    //                 const response = await axios.post('/auth/refresh-token', {}, { withCredentials: true });
                    
    //                 // Retry the original request
    //                 return api(originalRequest);
    //             } catch (refreshError) {
    //                 // If refresh fails, redirect to login
    //                 window.location.href = '/login';
    //                 return Promise.reject(refreshError);
    //             }
    //         }
            
    //         return Promise.reject(error);
    //     }
    // );

 
    // console.log('VITE_API_URL from import.meta.env:', import.meta.env.VITE_API_URL);
    // console.log('VITE_API_URL from window._env_:', window._env_ ? window._env_.VITE_API_URL : 'undefined');
    // console.log('Final baseURL:', baseURL);

    return api;
};



export default baseApi;

