import React from "react";
import styles from "./Header.module.scss"
import { Link } from "react-scroll";


function Header() {


    return (
        <div className={styles.header}>
            <a><Link to={'about'}>Катерина Семёнова</Link></a>
        </div>
    )
}

export default Header