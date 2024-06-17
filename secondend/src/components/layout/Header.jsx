import React from 'react';

const Header = ({ isLoggedIn }) => {
    return (
        <header>
            <h1>My App</h1>
            {isLoggedIn ? (
                <p>Welcome, User!</p>
            ) : (
                <div>
                    <button>Login</button>
                    <button>Signup</button>
                </div>
            )}
        </header>
    );
};

export default Header;