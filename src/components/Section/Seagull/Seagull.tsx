import React from "react";
import Carousel from "../../Carousel/Carousel";
import styles from './Seagull.module.scss';

import seagull_slide1 from '../../../assets/SeagullSlides/Chayka1.png';
import seagull_slide2 from '../../../assets/SeagullSlides/Chayka2.png';
import seagull_slide3 from '../../../assets/SeagullSlides/Chayka3.png';
import seagull_slide4 from '../../../assets/SeagullSlides/Chayka4.png';
import seagull_slide5 from '../../../assets/SeagullSlides/Chayka5.png';
import seagull_slide6 from '../../../assets/SeagullSlides/Chayka6.png';
import seagull_slide7 from '../../../assets/SeagullSlides/Chayka7.png';
import seagull_slide8 from '../../../assets/SeagullSlides/Chayka8.png';

function Seagull() {

    const slides = [
        {img: seagull_slide1},
        {img: seagull_slide2},
        {img: seagull_slide3},
        {img: seagull_slide4},
        {img: seagull_slide5},
        {img: seagull_slide6},
        {img: seagull_slide7},
        {img: seagull_slide8}
    ]

    return (
        <div className={styles.section}>
            <Carousel>
                {
                    slides.map((item, index) => {
                        return (
                            <div>
                                <img src={item.img} alt={'Чайка. Фирменный стиль, 2022 г.'}/>
                            </div>
                        )
                    })

                }
            </Carousel>

            <div>
                {

                }
            </div>
        </div>
    )
}

export default Seagull;