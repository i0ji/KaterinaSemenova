import React from 'react';
import Carousel from '../../Carousel/Carousel';
import styles from './Seagull.module.scss';
import {slides, SeagullDescription} from './SeagullData'


function Seagull() {


    return (
            <div className={`${styles.section} ${styles.section_margin}`}>
                <Carousel description={SeagullDescription}>
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
        </div>
    )
}

export default Seagull;