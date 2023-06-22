import React from "react";
import styles from './Header.module.scss'
import {scrollLink} from "../../App";

function Header() {
    return (
        <div className={styles.header}>
            <p>Екатерина Семёнова</p>
            <a href={scrollLink.url} key={scrollLink.id}>обо мне</a>
        </div>
    )
}

export default Header