import React from "react";
import styles from "./Header.module.scss"
import {Link} from "react-scroll";

export default function Header() {


    return (
        <div className={styles.header}>
            <Link to={'about'}>
                    Катерина Семёнова
            </Link>
        </div>
    )
}