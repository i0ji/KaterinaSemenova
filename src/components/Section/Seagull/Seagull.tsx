import React from 'react';
import Carousel from '../../Carousel/Carousel';
import styles from './Seagull.module.scss';
import {seagullSlides} from './SeagullData';
import {seagullDescription} from './SeagullData';

function Seagull() {

    return (
        <div className={styles.section}>
            <Carousel description={seagullDescription}>
                {
                    seagullSlides.map((item, index) => {
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