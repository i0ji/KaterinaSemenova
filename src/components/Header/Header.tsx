import React from "react";
import styles from "./Header.module.scss";
import {Link} from "react-scroll";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to={"about"}>Катерина Семёнова</Link>
        </header>
    );
}
