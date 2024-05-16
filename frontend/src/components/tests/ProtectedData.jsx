import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProtectedData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const token = localStorage.getItem('access_token');
                if (!token) {
                    setError('No access token found. Please log in.');
                    return;
                }

                const response = await axios.post('http://localhost:5000/auth/protected', {}, {
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
