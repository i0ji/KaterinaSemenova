import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './NagaStyle.module.scss';
import {slides, sectionDescription} from './NagaStyleData'
import '../../../styles/_carouselStyles.scss'
import SlideCarousel from "../../Carousel/Carousel";


const renderSlides = slides.map((image) => (
    <div>
        <img src={image.img} alt={sectionDescription}/>
    </div>
));

function NagaStyle() {

    return (
        <div className={`${styles.section} ${styles.section_margin}`}>

            <SlideCarousel renderSlides={renderSlides} description={sectionDescription}/>

        </div>
    )
}

export default NagaStyle;