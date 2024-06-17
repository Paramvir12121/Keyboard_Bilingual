import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Inline styles for the footer
    const footerStyle = {
        position: 'fixed', // Fix position to the bottom of the page
        left: 0,
        bottom: 0,
        width: '100%',
        textAlign: 'center', // Center the text
        // backgroundColor: '#f0f0f0', // Background color for the footer
        padding: '5px 0', // Add some padding
    };

    return (
        <footer style={footerStyle}>
            <p>&copy; {currentYear} Arch. All rights reserved.</p>
        </footer>
    );
};

export default Footer;