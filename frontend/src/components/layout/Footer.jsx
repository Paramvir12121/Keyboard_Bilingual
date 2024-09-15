import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {currentYear} Arch. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
