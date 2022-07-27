import React from "react";
import styles from "../Header.module.css"
import logo from "../../../img/logo.png"

const Logo = () => {
    return (
        <div className={styles.log}>
            <img height={40} src={logo} alt='oops' />
        </div>
    )
}


export default Logo