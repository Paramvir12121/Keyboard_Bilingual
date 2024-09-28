import React, { useEffect, useState } from 'react';
import baseApi from '../../hooks/baseApi';

const UserProfile = () => {
    const api = baseApi();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get('/auth/getuserprofile', { withCredentials: true });
                if (response.data) {
                    console.log(response.data);
                    setUserData(response.data);
                }
            } catch (error) {
                console.error(error.response?.data?.message || "An unexpected error occurred");
                setError(error.response?.data?.message || "An unexpected error occurred");
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <h1>User Profile</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                userData ? (
                    <div>
                        <p>Welcome, {userData.username}!</p>
                        {/* Add more user details as needed */}
                        <p>Email: {userData.email}</p>
                        <p>Progress: </p>
                        <p>Keyboard Progress: </p>
                        <p>Speed Goal: </p>
                        <p> Subscription level: {userData.subscriber ? "Subscriber" : "SubscribeHere" }</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            )}
        </div>
    );
};

export default UserProfile;
