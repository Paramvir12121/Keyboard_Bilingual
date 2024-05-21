import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogoutButton from '../auth/LogoutButton';
import baseApi from '../Api/BaseApi';


const ProtectedData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const token = localStorage.getItem('access_token');
                if (!token) {
                    setError('No access token found. Please log in.');
                    return;
                }
                // Decode the token to get user information
                // const id_token = localStorage.getItem('id_token');
                // const decodedToken = jwtDecode(id_token);
                // console.log(decodedToken)
                //const userName = decodedToken.name || decodedToken.email || 'User'; // Adjust according to your token payload
                // setUserName(userName);


                const response = await baseApi.post('/auth/protected', {}, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                });

                setData(response.data);
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

    return (
        <div>
            <h2>Protected Data</h2>
            <LogoutButton />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <h2>Welcome</h2>
            {data ? (
                <div>
                    <p>{data.message}</p>
                </div>
            ) : (
                !error && <p>Loading...</p>
            )}
        </div>
    );
};

export default ProtectedData;
