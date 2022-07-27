import React, { useState } from "react";
import PaginatorImages from "../../../common/PaginatorImages";
import styles from '../Pdp.module.css'
import CurrentImage from "./CurrentImage";

const Images = ({ gallery }) => {
    const [currentImage, setCurrentImage] = useState(0)


    return (
        <div className={styles.images_wrap}>

            <PaginatorImages gallery={gallery} currentImage={currentImage} setCurrentImage={setCurrentImage}/>

            <CurrentImage gallery={gallery} currentImage={currentImage}/>

        </div>

    )
}

export default Images