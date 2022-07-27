import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../../Header.module.css"
import CartItem from "../CartItem"

const CartItemContainer = () => {
    const order = useSelector(state => state.body.order)
    const currentCurrency = useSelector(state => state.body.currentCurrency)

    let arrOfPrices = []
    let price
    let symbol
    let total

    return (
        <>
            <div className={styles.CartItem}>
                {order.map((i, index) => {
                    i.prices.forEach(item => {
                        if (item.currency.label === currentCurrency) {
                            price = item.amount
                            arrOfPrices.push(price)
                            symbol = item.currency.symbol
                        }
                    })
                    total = arrOfPrices.reduce((total, price) => total + price).toFixed(2)
                    return <CartItem price={price} symbol={symbol}
                        arrOfPrices={arrOfPrices}
                        key={index} data={i}
                        index={index} />
                })}

            </div>

            <div>Total: {total} {symbol}</div>
        </>

    )
}

export default CartItemContainer
