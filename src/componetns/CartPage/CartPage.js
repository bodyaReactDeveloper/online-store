import React from "react";
import styles from "./../Header/Header.module.css"
import { useSelector } from "react-redux";
import CartItem from "../Header/CartOverlay/CartItem";

const CartPage = props => {
    const order = useSelector(state => state.body.order)
    const currentCurrency = useSelector(state => state.body.currentCurrency)

    let arrOfPrices = []

    let price
    let symbol
    let totall

    return (
        <div className={styles.cart_page_wrap}>
            <div className={styles.cart_page}>

                <div className={styles.CartItem_page}>
                    {order.map((i, index) => {

                        i.prices.forEach(item => {

                            if (item.currency.label === currentCurrency) {
                                price = item.amount
                                arrOfPrices.push(price)
                                symbol = item.currency.symbol
                            }
                        })

                        arrOfPrices.length ? totall = arrOfPrices.reduce((total, price) => total + price).toFixed(2)
                        :totall = 0

                        return <CartItem index={index} price={price} symbol={symbol} arrOfPrices={arrOfPrices} key={index} currentCurrency={props.currentCurrency} data={i} />
                    })}

                </div>

            </div>

            <div><b>Total:</b>{totall} {symbol}</div>
            <div><b>Quantity:</b>{order.length}</div>
            <div><button onClick={() => alert("Thanks for visiting my store )")} className={styles.order}>ORDER</button></div>
        </div>
    )


}

export default CartPage