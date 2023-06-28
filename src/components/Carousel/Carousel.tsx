import React, {useState} from "react";
import {Carousel} from "react-responsive-carousel";
import '../../styles/_carouselStyles.scss'

function SlideCarousel(props: any) {

    const [currentIndex, setCurrentIndex] = useState(0);

    function handleChange(index: any) {
        setCurrentIndex(index);
    }

    const attributes = {
        showArrows: true,
        autoPlay: true,
        interval: 5000,
        showThumbs: false,
        showStatus: false,
        infiniteLoop: true,
        onChange: handleChange,
        showIndicators: false
    }

    if (window.innerWidth < 700) {
        attributes.showArrows = false
    }

    return (
            <Carousel
                {...attributes}
            >{props.render}
            </Carousel>
    )
}

export default SlideCarousel;


