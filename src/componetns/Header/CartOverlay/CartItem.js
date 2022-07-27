import React from "react"
import styles from "../Header.module.css"
import Attributes from "../../Attributes/Attribute"

const CartItem = ({ price, symbol, data, index }) => {

    return (
        <>
            <div className={styles.item}>

                <Description data={data} index={index} price={price} symbol={symbol}/>

                <Proto data={data} />
            </div>


        </>

    )

}

const Proto = ({ data }) => {
    return (
        <div className={styles.proto}>
            <img src={data.gallery[0]} alt="error" />
        </div>
    )
}

const Description = ({ index, data, price, symbol }) => {
    return (
        <div className={styles.description}>
            <div><b>{data.name}</b></div>

            <Attributes index={index} fromHeader={true} attributes={data.attributes} />

            <div><b>Price: </b> {price} {symbol}</div>
        </div>
    )
}


export default CartItem