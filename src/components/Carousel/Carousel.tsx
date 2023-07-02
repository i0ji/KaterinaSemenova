import React, {useState} from "react";
import {Carousel} from "react-responsive-carousel";
import '../../styles/_carouselStyles.scss'


function SlideCarousel(props: any) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChange = (index: any) => {
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
        showIndicators: false,
    }

    console.log(currentIndex)

    if (window.innerWidth < 700) {
        attributes.showArrows = false
    }

    console.log()

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


export default SlideCarousel;


