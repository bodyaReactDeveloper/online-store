import React, { useEffect, useState } from "react";
import styles from "../PDP/Pdp.module.css"

const PaginatorImages = ({gallery,currentImage,setCurrentImage}) => {

    const [arrOfCurrents, setArrOfCurrents] = useState([])

    const countOfImages = gallery.length,
        arr = []

    for (let i = 1; i < countOfImages; i += 1) {
        arr.push(i)
    }

    useEffect(() => {
        let tmpNumberOfPages = [...arr]

        if (currentImage === 0) {
            tmpNumberOfPages = [0, 1]
        }

        else if (currentImage >= 1 && currentImage <= arr.length-1) {
            tmpNumberOfPages = [currentImage, currentImage+1]
        }

        else if (currentImage === arr.length) {
            let sliced = arr.slice(arr.length - 2, arr.length)
            tmpNumberOfPages = [...sliced]
        }
        setArrOfCurrents(tmpNumberOfPages)

    }, [currentImage])

    return (
        <div className={styles.notCurrentImages}>

            {gallery.length >= 4 && <button onClick={() => setCurrentImage(prev => prev === 0 ? prev : prev - 1)}>prev</button>}

            {gallery.length <= 3 ?
                gallery.map((img, index) => {
                    return <img onClick={() => setCurrentImage(index)} key={img} src={img} alt="oops" />
                })
                : arrOfCurrents.map(p => {
                    return <div onClick={() => setCurrentImage(p)} key={p}>{p + 1} <img src={gallery[p]} /></div>

                })
            }
            {gallery.length >= 4 && <button onClick={() => setCurrentImage(prev => prev === gallery.length - 1 ? prev : prev + 1)}>next</button>}
        </div>
    )
}

export default PaginatorImages