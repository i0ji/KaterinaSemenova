import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Mall.module.scss';
import {slides, mallDescription} from './MallData';
import '../../../styles/_carouselStyles.scss'
import SlideCarousel from "../../Carousel/Carousel";


const renderSlides = slides.map((image) => (
    <div>
        <img src={image.img} alt={mallDescription}/>
    </div>
));

function Mall() {
    return (
        <div className={`${styles.section} ${styles.section_margin}`}>

            <SlideCarousel render={renderSlides}/>

            <div className={styles.section_description}>
                <p>{mallDescription}</p>

                <p>{`${slides.length}`}</p>
            </div>
        </div>
    )
}

export default Mall;