import React, { useEffect, useState } from 'react';
import baseApi from '../../hooks/baseApi';
import { Card, Button } from 'react-bootstrap';
import StripeHostedPages from '../stripe/StripeHostedPages';
import useFetchSettings from '../../hooks/useFetchSettings';
import Cookies from 'js-cookie';

const UserProfile = () => {
    const api = baseApi();

    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [settingData, setSettingData] = useState(null);
    const [completePercentage, setCompletePercentage] = useState(null);
    useEffect(() => {
        // Parse settings cookie
        const storedSettings = Cookies.get('settings');
        setCompletePercentage(Cookies.get('completePercentage')) ; 
      
        if (storedSettings) {
            try {
                setSettingData(JSON.parse(storedSettings));
            } catch (error) {
                console.error('Failed to parse settings:', error);
            }
        }
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get('/auth/getuserprofile', { withCredentials: true });
                if (response.data) {
                    setUserData(response.data);
                }
            } catch (error) {
                setError(error.response?.data?.message || "An unexpected error occurred");
            }
        };


        fetchUserData();
    }, []);

    

    const handleDeleteProfile = async () => {
        try {
            await api.delete('/auth/deleteprofile', { withCredentials: true });
            // Logic for after deletion, like redirecting or showing a success message
        } catch (error) {
            setError(error.response?.data?.message || "Failed to delete profile");
        }
    };

    return (
        <div className="user-profile-container">
            <h1 className="profile-title">User Profile</h1>
            {error ? (
                <p className="error-message">{error}</p>
            ) : (
                userData ? (
                    <Card className="profile-card">
                        <Card.Body>
                            <Card.Title className="profile-header">Welcome, {userData.username}!</Card.Title>
                            <Card.Text className="profile-details"><strong>Email:</strong> {userData.email}</Card.Text>
                            <Card.Text className="profile-details"><strong>Keybord Format You are currently Learning:</strong> {settingData.user_learning_layout}</Card.Text>
                            <Card.Text className="profile-details"><strong>Keyboard Layout:</strong> {settingData.keyboard_layout}</Card.Text>
                            <Card.Text className="profile-details"><strong>Keyboard Progress:</strong> {completePercentage}%</Card.Text>
                            <Card.Text className="profile-details"><strong>Speed Goal:</strong> 60 WPM</Card.Text>
                            {!userData.subscriber && (
                                <Card.Text className="profile-details">
                                <StripeHostedPages />
                                </Card.Text>
                            )}
                            <Button variant="danger" onClick={handleDeleteProfile} className="delete-profile-btn">
                                Delete Profile
                            </Button>
                        </Card.Body>
                    </Card>
                ) : (
                    <p className="loading-message">Loading...</p>
                )
            )}
        </div>
    );
};

export default UserProfile;
