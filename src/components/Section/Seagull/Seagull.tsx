import React, {useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import styles from './Seagull.module.scss';
import {slides, seagullDescription} from './SeagullData';
import '../../../styles/_carouselStyles.scss'

const renderSlides = slides.map((image) => (
    <div>
        <img src={image.img} alt={seagullDescription}/>
    </div>
));

function Seagull() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleChange(index: any) {
        setCurrentIndex(index);
    }

    return (
        <div className={`${styles.section} ${styles.section_margin}`}>


            <Carousel
                showArrows={false}
                autoPlay={true}
                interval={5000}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                onChange={handleChange}
                showIndicators={false}
            >

                {renderSlides}

            </Carousel>


            <div className={styles.section_description}>
                <p>{seagullDescription}</p>

                <p>{`${currentIndex + 1}
                / ${slides.length}`}</p>
            </div>
        </div>
    )
}

export default Seagull;