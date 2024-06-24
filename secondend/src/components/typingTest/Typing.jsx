import React from 'react';
import Card from 'react-bootstrap/Card';

const Typing = () => {
    return (
        <div >
            <Card className="m-5 bg-dark">
                <Card.Header className="text-center text-white">Title</Card.Header>
                <Card.Body className="d-flex min-vh-100 justify-content-center align-items-center text-light px-4">
                    <div>Content goes here</div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Typing;
