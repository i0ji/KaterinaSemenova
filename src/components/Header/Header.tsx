import React from "react";
import styles from './Header.module.scss'
import {scrollLink} from "../../App";

function Header() {
    return (
        <div className={styles.header}>
            <a href={scrollLink.url} key={scrollLink.id}>Катерина Семёнова</a>
        </div>
    )
}

export default Header