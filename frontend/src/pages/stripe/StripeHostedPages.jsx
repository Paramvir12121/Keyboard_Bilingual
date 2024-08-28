import React from 'react';
import baseApi from '../../hooks/baseApi';

const StripeHostedPages = () => {
    const api = baseApi();
    const handleSubmit = async (event) => {
        event.preventDefault();  // Prevent the default form submission

        try {
            const response = await api.post('/payment/create-checkout-session', {
                priceId: 'price_1PsWPYHmg8SPUB4ZXGciQSGv'
            }, { withCredentials: true });
            
            const { url } = response.data;  // Extract the url correctly
            if (url) {
                window.open(url, '_blank');  // Open the Stripe checkout page in a new tab/window
            }

        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <>
            <div className="product">
                <div className="description">
                    <h3>Stubborn Attachments</h3>
                    <h5>$13.99</h5>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <button type="submit">
                    Checkout
                </button>
            </form>
        </>
    );
};

export default StripeHostedPages;
