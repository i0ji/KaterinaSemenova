import React from "react";
import styles from './Header.module.scss'

function Header() {
    return (
        <div className={styles.header}>
            <p>Екатерина Семёнова</p>
            <a>обо мне</a>
        </div>
    )
}

export default Header