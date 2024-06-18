import axios from 'axios'

console.log(import.meta.env.VITE_API_URL)

const baseApi = () => {
    const api = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })

    // api.interceptors.request.use(
    //     config => {
    //         const token = localStorage.getItem('token')
    //         if (token) {
    //             config.headers.Authorization = `Bearer ${token}`
    //         }
    //         return config
    //     },
    //     error => Promise.reject(error)
    // )

    return api
}

export default baseApi