import React, { useState } from "react";
import PaginatorImages from "../common/PaginatorImages";
import styles from './Pdp.module.css'

const Images = ({ gallery }) => {
    const [currentImage, setCurrentImage] = useState(0)


    return (
        <div className={styles.images_wrap}>

            <PaginatorImages gallery={gallery} currentImage={currentImage} setCurrentImage={setCurrentImage}/>

            <div className={styles.mainImg_container}>
                <img height={200} src={gallery[currentImage]} alt="oops" />
            </div>

        </div>

    )
}

export default Images