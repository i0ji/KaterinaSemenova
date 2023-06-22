import React from "react";
import Carousel from "../../Carousel/Carousel";
import styles from './Anniversary.module.scss';
import {anniversarySlides} from "./AnniversaryData";
import {anniversaryDescription} from "./AnniversaryData";

function Anniversary() {

    return (
        <div className={styles.section}>
            <Carousel description={anniversaryDescription}>
                {
                    anniversarySlides.map((item, index) => {
                        return (
                            <div>
                                <img src={item.img} alt={'Чайка. Фирменный стиль, 2022 г.'}/>
                            </div>
                        )
                    })

                }
            </Carousel>
        </div>
    )
}

export default Anniversary;