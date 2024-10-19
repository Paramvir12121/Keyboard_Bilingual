import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>&copy;{currentYear} Innov Softwares Workshop. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
