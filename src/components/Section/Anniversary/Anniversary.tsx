import React from "react";
import Carousel from "../../Carousel/Carousel";
import styles from './Anniversary.module.scss';

import anniversary_slide1 from '../../../assets/AnniversarySlides/dr1.png'
import anniversary_slide2 from '../../../assets/AnniversarySlides/dr2.png'
import anniversary_slide3 from '../../../assets/AnniversarySlides/dr3.png'
import anniversary_slide4 from '../../../assets/AnniversarySlides/dr4.png'



function Anniversary() {

    const slides = [
        {img: anniversary_slide1},
        {img: anniversary_slide2},
        {img: anniversary_slide3},
        {img: anniversary_slide4},
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

export default Anniversary;