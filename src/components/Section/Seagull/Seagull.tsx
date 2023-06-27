import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import styles from './Seagull.module.scss';
import {slides, SeagullDescription} from './SeagullData'

const renderSlides = slides.map((image) => (
    <div>
        <img src={image.img} alt={SeagullDescription} />
    </div>
));

export default function App() {
    const [currentIndex, setCurrentIndex] = useState();

    function handleChange(index: any) {
        setCurrentIndex(index);
    }
    return (
        <div className={`${styles.section} ${styles.section_margin}`}>
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                selectedItem={slides[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
            >
                {renderSlides}
            </Carousel>
        </div>
    );
}