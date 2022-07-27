import React from 'react';
import styles from '../Pdp.module.css';

const CurrentImage = ({gallery,currentImage}) => {
    return (
        <div className={styles.mainImg_container}>
            <img height={200} src={gallery[currentImage]} alt="oops" />
        </div>
    )
}

export default CurrentImage
