import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './NoraStyle.module.scss';
import {slides, sectionDescription} from './NoraStyleData';
import '../../../styles/_carouselStyles.scss'
import SlideCarousel from "../../Carousel/Carousel";


const renderSlides = slides.map((image) => (
    <div>
        <img src={image.img} alt={sectionDescription}/>
    </div>
));

function NoraStyle() {
    return (
        <div className={`${styles.section} ${styles.section_margin}`}>

            <SlideCarousel renderSlides={renderSlides} description={sectionDescription}/>

        </div>
    )
}

export default NoraStyle;