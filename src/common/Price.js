import React from "react";
import styles from "../componetns/PDP/Pdp.module.css"

const Price = (props) => {
    return (
        <div id={styles.price_container} className={styles.container}><b>Price:</b>
            {props.prices.map(i => {
                return i.currency.label === props.currentCurrency && <div className={styles.price} key={i.amount}>{i.amount} {i.currency.symbol} </div>
            })
            }
        </div>
    )


}

export default Price