import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            Welcome to the Dashboard
            {/* Add your dashboard components here */}
            <div>
                <Link to="/typing">Typing</Link>
            </div>
        </div>
    );
};

export default Dashboard;