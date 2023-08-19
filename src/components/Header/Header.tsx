import React from "react";
import styles from "./Header.module.scss"
import {Link} from "react-scroll";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {

    return (
        <header className={styles.header}>
            <Link to={'about'}>
                Катерина Семёнова
            </Link>

            <div className={styles.header__toggle_bar}>
                <ThemeToggle/>
            </div>
        </header>
    )
}