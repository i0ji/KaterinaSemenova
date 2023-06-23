import React from "react";
import Carousel from "../../Carousel/Carousel";
import styles from './Mall.module.scss';
import {mallSlides} from "./MallData";
import {mallDescription} from "./MallData";

function Mall() {

    return (
        <div className={`${styles.section} ${styles.section_margin}`}>
            <Carousel description={mallDescription}>
                {
                    mallSlides.map((item, index) => {
                        return (
                            <div>
                                <img src={item.img} alt={'БЦ Нагатинский. Фирменный стиль'}/>
                            </div>
                        )
                    })

                }
            </Carousel>
        </div>
    )
}

export default Mall;