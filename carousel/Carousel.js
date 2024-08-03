import React, {useEffect, useState} from 'react';
import images from './Images.js';
import './Carousel.css';
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => ((prevIndex - 1 + images.length) % images.length));
    }

    const nextSlide = () => {
        setCurrentIndex((nextIndex) => ((nextIndex + 1) % images.length));
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 1000);
        return () => clearInterval(interval);
    },[])

    return(
        <div className="carousel">
            <button className="carousel-control prev" onClick={prevSlide} disabled={currentIndex === 0}>Prev</button>
            <div className="carousel-images">
                {
                    images.map((image,index) => (
                        <div key={index} 
                        className={`carousel-image ${index === currentIndex ? 'active' : ''}`}>
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))
                }
            </div>
            <button className="carousel-control next" onClick={nextSlide} disabled={currentIndex === images.length - 1}>Next</button>
        </div>
    );
}

export default Carousel;