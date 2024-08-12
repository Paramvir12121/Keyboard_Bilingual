import baseApi from '../api/baseApi'
import { useEffect } from 'react'

console.log(import.meta.env.VITE_API_URL)

const checkAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [userId, setUserId] = useState('')

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const api = baseApi();
                const response = await api.get('/auth/checklogin',{withCredentials: true});
                if (response.data.success) {
                    setIsLoggedIn(true);
                    setUserId(response.data.user.id);
                    setUsername(response.data.user.username);
                    setEmail(response.data.user.email);
                }
            } catch (error) {
                console.error(error);
                setEmail(null);
                setUsername(null);
                setUserId(null);
                setIsLoggedIn(false);
            }
        }
        checkAuth()
    }, []);
    return {isLoggedIn, userId, username, email};

    
}

export default checkAuth;