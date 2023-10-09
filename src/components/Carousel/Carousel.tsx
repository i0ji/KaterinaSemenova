import React, {useState} from "react";
import {Carousel} from "react-responsive-carousel";
import './Carousel.scss';

export interface imageProps {
    renderSlides: JSX.Element[];
    description: string;
}

export default function SlideCarousel(props: imageProps) {

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
        <>
            <Carousel
                {...attributes}
            >{props.renderSlides}
            </Carousel>
            <div className={'carousel__description'}>
                <p>{props.description}</p>
                <p>{`${currentIndex + 1} / ${props.renderSlides.length}`}</p>
            </div>
        </>
    )
}


