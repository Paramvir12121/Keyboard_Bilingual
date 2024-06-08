import baseApi from '../hooks/BaseApi';
import { useNavigate } from 'react-router-dom';

const LogoutHandler = ({ setIsUserLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await baseApi.post('/auth/logout');
            console.log('Logout successful:', response.data);
            sessionStorage.clear();
            setIsUserLoggedIn(false)
            
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return handleLogout;
};

export default LogoutHandler;
