import React from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import { Carousel } from 'react-bootstrap';

const LandingPage = () => {
    return (
        <>
            <h1>Welcome to the Landing Page!</h1>
            <Carousel>
            <Carousel.Item>
                <FirstPage />
            </Carousel.Item>
            <Carousel.Item>
                <SecondPage />
            </Carousel.Item>
            <Carousel.Item>
                <ThirdPage />
            </Carousel.Item>
            </Carousel>

        <h2>This is an amazing App!!!!</h2>
        </>
    );
};

export default LandingPage;