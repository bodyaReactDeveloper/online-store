import React from "react";
import styles from "./Header.module.css"
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

class CartOverlay extends React.Component {
    render() {
        let arrOfPrices = []

        let price
        let symbol
        let total



        return (
            <>
                <div className={styles.cart_overlay_wrap}>
                    <div className={styles.cart_overlay}>
                        <div>My basket</div>

                        <div className={styles.CartItem}>
                            {this.props.order.map((i, index) => {
                                i.prices.forEach(item => {
                                    if (item.currency.label === this.props.currentCurrency) {
                                        price = item.amount
                                        arrOfPrices.push(price)
                                        symbol = item.currency.symbol
                                    }
                                })
                                total = arrOfPrices.reduce((total, price) => total + price).toFixed(2)
                                return <CartItem price={price} symbol={symbol} arrOfPrices={arrOfPrices} key={index} currentCurrency={this.props.currentCurrency} data={i} />
                            })}

                        </div>

                    </div>

                    <div>Total: {total} {symbol}</div>

                    <div className={styles.btn_container}>
                        <Link to={"/cart_page"}><button className={styles.btn_VB}>VIEW BACK</button></Link>
                        <button className={styles.btn_CO}>CHECK OUT</button>
                    </div>

                </div>


            </>
        )
    }
}


export default CartOverlay