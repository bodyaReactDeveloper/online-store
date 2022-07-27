import React from "react";
import styles from "../Header.module.css"
import { Link } from "react-router-dom"

const Nav = () => {
        return (
            <nav className={styles.container_department} department>
                <div className={styles.department_item}><Link to={"all"}>all</Link></div>
                <div className={styles.department_item}><Link to={"clothes"}>clothes</Link></div>
                <div className={styles.department_item}><Link to={"tech"}>tech</Link></div>
            </nav>
        )
    }


export default Nav