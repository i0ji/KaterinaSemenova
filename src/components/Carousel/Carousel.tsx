import React, {useState} from "react";
import {Carousel} from "react-responsive-carousel";
import './Carousel.scss';


export default function SlideCarousel(props: any) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChange = (index: any) => {
        setCurrentIndex(index);
    }

    const attributes = {
        preventMovementUntilSwipeScrollTolerance: true,
        swipeScrollTolerance: 50,
        showArrows: true,
        autoPlay: true,
        interval: 10000,
        showThumbs: true,
        showStatus: false,
        infiniteLoop: true,
        onChange: handleChange,
        showIndicators: true,
    }

    if (window.innerWidth < 700) {
        attributes.showArrows = false
    }

    return (
        <div>
            <Carousel
                {...attributes}
            >{props.renderSlides}
            </Carousel>
            <div className={'carousel__description'}>
                <p>{props.description}</p>
                <p>{`${currentIndex+1} / ${props.renderSlides.length}`}</p>
            </div>
        </div>
    )
}


