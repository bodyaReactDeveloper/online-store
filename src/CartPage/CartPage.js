import React from "react";
import styles from "./../Header/Header.module.css"
import { connect } from "react-redux";
import CartItem from "../Header/CartItem";
import { compose } from "redux";

class CartPage extends React.Component {

    render() {
        let arrOfPrices = []

        let price
        let symbol
        let total

        return (
            <div className={styles.cart_page_wrap}>
                <div className={styles.cart_page}>

                    <div className={styles.CartItem_page}>
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

                <div><b>Total:</b>{total} {symbol}</div>
                <div><b>Quantity:</b>{this.props.order.length}</div>
                <div><button onClick={() => console.log(this.props.order)} className={styles.order}>ORDER</button></div>
            </div>
        )
    }

}

let mapStateToProps = state => {
    return {
        order: state.body.order,
        currentCurrency: state.body.currentCurrency
    }
}

export default compose(
    connect(mapStateToProps, {})
)
    (CartPage)