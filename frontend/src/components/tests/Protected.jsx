import React, { useState, useEffect } from 'react';

import baseApi from '../hooks/BaseApi';
import { jwtDecode } from "jwt-decode";
import useAuth from '../hooks/useAuth';


const Protected = () => {
    const [msg, setMsg] = useState('')

    const getData =  async() => {
        const response = await baseApi.get('/auth/protected', {
            withCredentials: true, // Ensure cookies are sent with the request
            
        });
        console.log("response:", response.data)
    }

    return (
        <div>
            <h2>Protected Data</h2>
            
            <button onClick={getData}>Get Data</button>
            {/* {error && <p style={{ color: 'red' }}>{error}</p>}
            {data ? (
                <div>
                    <p>{data.message}! Welcome {userName} {email}</p>
                </div>
            ) : (
                !error && <p>Loading...</p>
            )} */}
        </div>
    );
};

export default Protected;
