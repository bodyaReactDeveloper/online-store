import React, { Component } from "react"
import styles from "./Header.module.css"
import { setProduct, setColor, setCapacity, setSize, setTouchingWith, setWithUSB } from "./../redux/reducer-pdp"
import { connect } from "react-redux"
import Attributes from "./../PDP/Attribute"

class CartItem extends Component {
    render() {
        let price
        let symbol

        this.props.data.prices.forEach(i => {
            if (i.currency.label === this.props.currentCurrency) {
                price = i.amount
                symbol = i.currency.symbol
            }
        })
        return (
            <>
                <div className={styles.item}>

                    <div className={styles.description}>
                        <div><b>{this.props.data.name}</b></div>

                        <Attributes {...this.props} fromHeader={true} attributes={this.props.data.attributes} />

                        <div><b>Price: </b> {this.props.price} {this.props.symbol}</div>
                    </div>

                    <div className={styles.proto}>
                        <img src={this.props.data.gallery[0]} alt="error" />
                    </div>
                </div>


            </>

        )
    }
}

let mapStateToProps = state => {
    return {
        currentCurrency: state.body.currentCurrency,
        color: state.pdp.color,
        size: state.pdp.size,
        capacity: state.pdp.capacity,
        withTouching: state.pdp.withTouching,
        withUSB: state.pdp.withUSB

    }
}

export default connect(mapStateToProps, { setProduct, setColor, setCapacity, setSize, setTouchingWith, setWithUSB })(CartItem)