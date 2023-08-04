import React, {useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Slides.module.scss';
import {Carousel} from "react-responsive-carousel";
import './Slides.scss'


export default function Slides(props: any) {

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

        <div className={ props.lastSlide ? (`${styles.section_last_slide} ${styles.section_margin}`) : (`${styles.section} ${styles.section_margin}`)}>
            <Carousel
                {...attributes}
            >{props.slides.map((image: any) => (
                <div key={image.id}>
                    <img key={image.id} src={image.img} alt={props.description}/>
                </div>))}
            </Carousel>
            <div className={'description'}>
                <p>{props.description}</p>
                <p>{`${currentIndex + 1} / ${props.slides.length}`}</p>
            </div>
        </div>
    )
}