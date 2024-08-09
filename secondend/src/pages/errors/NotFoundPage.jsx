import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../Routes';  // Import the routes

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to={ROUTES.DASHBOARD}>Go back to the index page</Link>  {/* Use ROUTES.DASHBOARD */}
        </div>
    );
};

export default NotFoundPage;
