import React, {useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import styles from './Slides.module.scss';
import './Slides.scss'
import * as int from "src/interfaces";

export default function Slides(props: int.ISlidesData,) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChange = (index: number) => {
        setCurrentIndex(index);
    }

    const attributes = {
        preventMovementUntilSwipeScrollTolerance: true,
        swipeScrollTolerance: 50,
        showArrows: true,
        autoPlay: true,
        interval: 10000,
        showThumbs: false,
        showStatus: false,
        infiniteLoop: true,
        onChange: handleChange,
        showIndicators: true,
    }

    if (window.innerWidth < 700) {
        attributes.showArrows = false
    }

    return (

        <div
            className={props.lastSlide ? (`${styles.section_last_slide} ${styles.section_margin}`) : (`${styles.section} ${styles.section_margin}`)}
        >
            <Carousel
                {...attributes}
            >{props.slides.map((image: int.ISlides) => (
                <div key={image.id}>
                    <img loading="lazy" key={image.id} src={image.img} alt={props.description}/>
                </div>))}
            </Carousel>
            <div className={'description'}>
                <p>{props.description}</p>
                <p>{`${currentIndex + 1} / ${props.slides.length}`}</p>
            </div>
        </div>
    )
}