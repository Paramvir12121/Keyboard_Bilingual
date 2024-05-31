import React, { useState, useEffect } from 'react';
import LogoutButton from '../auth/LogoutButton';
import baseApi from '../Api/BaseApi';
import { jwtDecode } from "jwt-decode";
import useAuth from '../auth/useAuth';


const Protected = () => {
    
    return (
        <div>
            <h2>Protected Data</h2>
            <LogoutButton />
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
