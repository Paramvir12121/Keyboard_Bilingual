import React from 'react';
import baseApi from '../../hooks/baseApi';

const StripeHostedPages = () => {
    const api = baseApi();
    const handleSubmit = async (event) => {
    try {
        const response = await api.post('/create-checkout-session', {
            priceId: 'price_1JZ2QzJ0zFqZV2Vc5s6XW8eM'},{withCredentials: true});
        console.log(response);
    }
    catch (error) {
        console.error(error);
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
    <form onSubmit={handleSubmit} >
      <button type="submit">
        Checkout
      </button>
    </form>
    </>
    );
};

export default StripeHostedPages;