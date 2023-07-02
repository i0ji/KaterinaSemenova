import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Anniversary.module.scss';
import {slides, anniversaryDescription} from './AnniversaryData';
import '../../../styles/_carouselStyles.scss'
import SlideCarousel from "../../Carousel/Carousel";


const renderSlides = slides.map((image) => (
    <div>
        <img src={image.img} alt={anniversaryDescription}/>
    </div>
));

function Anniversary() {

    return (
        <div className={`${styles.section} ${styles.section_margin}`}>

            <SlideCarousel renderSlides={renderSlides} description={anniversaryDescription}/>

        </div>
    )
}

export default Anniversary;