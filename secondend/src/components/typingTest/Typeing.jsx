import React from 'react';
import Card from 'react-bootstrap/Card';
// import '../../utilities/typing/main.css';

const Typeing = () => {
    const words = ["apple", "banana", "carrot", "dog", "elephant", "flower", "guitar", "house", "ice cream", "jungle", "kangaroo", "lemon", "mountain", "notebook", "ocean", "piano", "queen", "rainbow", "sun", "tree"];
    return (
        <div>
            <Card className="m-5 p-5">
                {/* <Card.Header className="text-center text-white">Title</Card.Header> */}
                <Card.Body className=" d-flex min-vh-100 justify-content-center align-items-center px-4">
                    <div className='text-wrap fs-1 typing-text'>
                        {words.map((word, index) => (
                            <span key={index}>{word} </span>
                        ))}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Typeing;
