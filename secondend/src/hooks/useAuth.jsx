import React, {useState, useEffect} from "react";
import baseApi from "./BaseApi";


const UseAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    
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




export default UseAuth