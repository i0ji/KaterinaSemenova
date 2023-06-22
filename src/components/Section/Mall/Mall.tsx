import React from "react";
import Carousel from "../../Carousel/Carousel";
import styles from './Mall.module.scss';
import {MallSlides} from "./MallData";

function Mall() {

    return (
        <div className={styles.section}>
            <Carousel>
                {
                    MallSlides.map((item, index) => {
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

export default Mall;