import React from 'react';
import baseApi from '../../hooks/baseApi';

const UserProfile = () => {
    const api = baseApi();
    const data = api.get('/users/me', { withCredentials: true });
    return (
        <div>
            <h1>User Profile</h1>
            <p>Welcome to the user profile page.</p>
        </div>
    );
};

export default UserProfile;