import React, {useState, useEffect} from "react";
import styles from './Carousel.module.scss'

function Carousel(props: any) {

    const {children} = props
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    useEffect(() => {
        setLength(children.length)
    }, [children])

    return (
        <div className={styles.carousel}>

            <div className={styles.carousel_wrapper}>

                {
                    currentIndex > 0 &&
                    <button onClick={prev} className={styles.left_button}>&lt;</button>
                }

                <div className={styles.carousel_content_wrapper}>

                    <div className={styles.carousel_content}
                         style={{transform: `translateX(-${currentIndex * 100}%)`}}
                    >
                        {children}

                    </div>

                    <div className={styles.carousel_description}>
                        <p>{props.description}</p>
                        <p>{`${currentIndex + 1} / ${length}`}</p>
                    </div>

                </div>

                {
                    currentIndex < (length - 1) &&
                    <button onClick={next} className={styles.right_button}>&gt;</button>
                }
            </div>

        </div>
    )
}

export default Carousel;