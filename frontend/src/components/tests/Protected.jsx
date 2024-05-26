import React, { useState, useEffect } from 'react';
import LogoutButton from '../auth/LogoutButton';
import baseApi from '../Api/BaseApi';
import { jwtDecode } from "jwt-decode";


const Protected = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState('');
    const [email,setEmail] = useState('')
    

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const token = localStorage.getItem('access_token');
                if (!token) {
                    setError('No access token found. Please log in.');
                    return;
                }
                // Decode the token to get user information
                const id_token = localStorage.getItem('id_token');
                const decodedToken = jwtDecode(id_token);
                console.log("Decoded Token: ",decodedToken.username)
                setUserName(decodedToken.preferred_username)
                setEmail(decodedToken.email)
                // const userName = decodedToken.username || 'User'; // Adjust according to your token payload
                // ;


                const response = await baseApi.post('/auth/protected', {}, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                });

                setData(response.data);
                console.log("data: ",data)
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    setError('Unauthorized. Please log in again.');
                } else {
                    setError('An error occurred while fetching the data.');
                }
            }
        };

        fetchProtectedData();
    }, []);

    // const fetchUserName = () =>{
    //     // Decode the token to get user information
    //     const access_token = localStorage.getItem('access_token');
    //     const decodedToken = jwtDecode(access_token);
    //     console.log("Decoded Token: ",decodedToken.username)
    //     username = decodedToken.username.toUpperCase()
    //     setUserName(username)
    // }

    return (
        <div>
            <h2>Protected Data</h2>
            <LogoutButton />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data ? (
                <div>
                    <p>{data.message}! Welcome {userName} {email}</p>
                </div>
            ) : (
                !error && <p>Loading...</p>
            )}
        </div>
    );
};

export default Protected;
