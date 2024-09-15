import { useNavigate } from 'react-router-dom';
import ROUTES from '../Routes';
import { useContext } from 'react';
import { Context } from '../App';

export const useLogout = () => {
    const [, setSignedIn] = useContext(Context); // Ensure context is correctly used
    const navigate = useNavigate();

    const logout = () => {
        // Update the signedIn state to false
        setSignedIn(false);

        // Clear localStorage and sessionStorage
        localStorage.removeItem('signedIn');
        sessionStorage.clear();

        // Clear cookies by setting expiry dates to the past
        const cookiesToClear = ['email', 'signedIn', 'username'];
        cookiesToClear.forEach((cookieName) => {
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });

        // Navigate to the login page after logout
        navigate(ROUTES.LOGIN);
    };

    return logout;
};
