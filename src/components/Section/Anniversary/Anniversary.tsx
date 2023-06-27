import React, {useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import styles from './Anniversary.module.scss';
import {slides, anniversaryDescription} from './AnniversaryData';
import '../../../styles/_buttonStyles.scss'

const renderSlides = slides.map((image) => (
    <div>
        <img src={image.img} alt={anniversaryDescription}/>
    </div>
));

function Anniversary() {
    const [currentIndex, setCurrentIndex] = useState();

    function handleChange(index: any) {
        setCurrentIndex(index);
    }

    return (
        <div className={`${styles.section} ${styles.section_margin}`}>


            <Carousel
                showArrows={true}
                autoPlay={true}
                interval={5000}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                onChange={handleChange}
                className={styles.CarouselStyles}
            >

                {renderSlides}

            </Carousel>


            <div className={styles.section_description}>
                <p>{anniversaryDescription}</p>

                <p>{`${Number(currentIndex)+1} 
                / ${slides.length}`}</p>
            </div>
        </div>
    )
}

export default Anniversary;