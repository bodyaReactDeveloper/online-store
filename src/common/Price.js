import React from "react";
import styles from "./../PDP/Pdp.module.css"

class Price extends React.Component {
    render() {
        return (
            <div id={styles.price_container} className={styles.container}><b>Price:</b>
                {this.props.prices.map(i => {
                    return i.currency.label === this.props.currentCurrency && <div className={styles.price} key={i.amount}>{i.amount} {i.currency.symbol} </div>
                })
                }
            </div>
        )
    }

}

export default Price