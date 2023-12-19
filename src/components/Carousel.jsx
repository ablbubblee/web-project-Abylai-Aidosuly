import React from 'react';
import { Carousel } from 'react-bootstrap';
const CusCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/carousel/1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/carousel/2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/carousel/5.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default CusCarousel