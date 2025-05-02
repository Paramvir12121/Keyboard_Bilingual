// import axios from 'axios';

// const baseApi = () => {
//     const baseURL =
//         typeof window._env_ !== 'undefined' &&
//         window._env_.VITE_API_URL &&
//         window._env_.VITE_API_URL !== '%VITE_API_URL%'
//             ? window._env_.VITE_API_URL
//             : import.meta.env.VITE_API_URL || 'http://localhost:5000';

//     const api = axios.create({
//         baseURL,
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//         },
//     });

//     const maxRetries = 3; // Maximum number of retry attempts

//     api.interceptors.response.use(
//         response => response, // Return response if successful
//         async error => {
//             const config = error.config; // Original request config

//             if (!config._retryCount) {
//                 config._retryCount = 0; // Track retry attempts
//             }

//             if (config._retryCount < maxRetries) {
//                 config._retryCount += 1;
//                 console.log(`Retrying request (${config._retryCount}/${maxRetries})...`);
                
//                 // Wait a bit before retrying
//                 await new Promise(res => setTimeout(res, 1000)); // 1 second delay
                
//                 return api(config); // Retry the request
//             }

//             return Promise.reject(error); // Reject if max retries exceeded
//         }
//     );
//     // console.log('VITE_API_URL from import.meta.env:', import.meta.env.VITE_API_URL);
//     // console.log('VITE_API_URL from window._env_:', window._env_ ? window._env_.VITE_API_URL : 'undefined');
//     // console.log('Final baseURL:', baseURL);

//     return api;
// };

// export default baseApi;

    


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
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

 
    // console.log('VITE_API_URL from import.meta.env:', import.meta.env.VITE_API_URL);
    // console.log('VITE_API_URL from window._env_:', window._env_ ? window._env_.VITE_API_URL : 'undefined');
    // console.log('Final baseURL:', baseURL);

    return api;
};

export default baseApi;

