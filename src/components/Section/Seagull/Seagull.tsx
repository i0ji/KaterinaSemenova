import React, {useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Seagull.module.scss';
import {slides, seagullDescription} from './SeagullData';
import '../../../styles/_carouselStyles.scss'
import SlideCarousel from "../../Carousel/Carousel";


const renderSlides = slides.map((image) => (
    <div>
        <img src={image.img} alt={seagullDescription}/>
    </div>
));

function Seagull() {

    return (
        <div className={`${styles.section} ${styles.section_margin}`}>

            <SlideCarousel renderSlides={renderSlides} description={seagullDescription}/>

        </div>
    )
}

export default Seagull;