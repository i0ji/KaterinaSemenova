import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Anniversary.module.scss';
import {slides, sectionDescription} from './AnniversaryData';
import '../../Carousel/Carousel.scss'
import SlideCarousel from "../../Carousel/Carousel";



const renderSlides = slides.map((image) => (
    <div key={image.id}>
        <img src={image.img} alt={sectionDescription}/>
    </div>
));

export default function Anniversary() {

    return (
        <div className={`${styles.section} ${styles.section_margin}`}>

            <SlideCarousel renderSlides={renderSlides} description={sectionDescription}/>

        </div>
    )
}