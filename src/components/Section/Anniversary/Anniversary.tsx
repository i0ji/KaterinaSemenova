import React from "react";
import Carousel from "../../Carousel/Carousel";
import styles from './Anniversary.module.scss';
import {anniversarySlides, anniversaryDescription} from "./AnniversaryData";


function Anniversary() {

    return (
        <div className={`${styles.section} ${styles.section_margin}`}>
            <Carousel description={anniversaryDescription}>
                {
                    anniversarySlides.map((item, index) => {
                        return (
                            <div>
                                <img src={item.img} alt={'Оформление к 69-летию бассейна'}/>
                            </div>
                        )
                    })

                }
            </Carousel>
        </div>
    )
}

export default Anniversary;