import React, { useState } from 'react';
import baseApi from '../../hooks/baseApi';
import { Card, Button, Modal } from 'react-bootstrap';

const StripeHostedPages = () => {
    const api = baseApi();
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await api.post('/payment/create-checkout-session', {
                priceId: 'price_1PsWPYHmg8SPUB4ZXGciQSGv'
            }, { withCredentials: true });
            
            const { url } = response.data;
            if (url) {
                window.open(url, '_blank');
                handleClose(); // Close modal after redirecting
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Get Premium and Go add free
            </Button>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Keyboard Bilingual Premium</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="profile-card">
                        <div className="product">
                            <div className="description">
                                <h3>Unlock All Features</h3>
                                <p>Get an ad-free experience and full access for just $13.99.</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        One-time Payment
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default StripeHostedPages;
