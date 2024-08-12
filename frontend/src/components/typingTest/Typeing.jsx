import React from 'react';
import Card from 'react-bootstrap/Card';
import CountdownTimer from './CountdownTimer';
import RestartButton from './RestartButton';
import Results from './Results';
import KeyboardLayout from './KeyboardLayout';


const Typeing = () => {
    const words = ["apple", "banana", "carrot", "dog", "elephant", "flower", "guitar", "house", "ice cream", "jungle", "kangaroo", "lemon", "mountain", "notebook", "ocean", "piano", "queen", "rainbow", "sun", "tree"];
    return (
        <div>
            <Card className="m-5 p-5 card-background">
                {/* <Card.Header className="text-center text-white"></Card.Header> */}
                <Results className="" errors={10} total={100} accuracyPercentage={90}/>
                <CountdownTimer seconds={15} />
                <Card.Body className=" d-flex min-vh-80 justify-content-center align-items-center px-4">
                    <div className='text-wrap fs-1 typing-text'>
                        {words.map((word, index) => (
                            <span key={index}>{word} </span>
                        ))}
                    </div>
                </Card.Body>
                <RestartButton onRestart={() => null}/>
                    
            </Card>
            <KeyboardLayout />
        </div>
    );
}

export default Typeing;
