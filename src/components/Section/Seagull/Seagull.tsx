import React, {useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import styles from './Seagull.module.scss';
import {slides, seagullDescription} from './SeagullData';
import '../../../styles/_buttonStyles.scss'

const renderSlides = slides.map((image) => (
    <div>
        <img src={image.img} alt={seagullDescription}/>
    </div>
));

function Seagull() {
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
                <p>{seagullDescription}</p>

                <p>{`${Number(currentIndex)+1} 
                / ${slides.length}`}</p>
            </div>
        </div>
    )
}

export default Seagull;