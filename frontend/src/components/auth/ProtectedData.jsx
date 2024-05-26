import React from 'react';


const ProtectedData = ({ children }) => {
    const isAuthenticated = !!sessionStorage.getItem('username'); // Check session storage for authentication status

    if (!isAuthenticated) {
        return (<>You are Not Logged in</>);
    }

    return children;
};

export default ProtectedData;