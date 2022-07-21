import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Price from "../common/Price";
import withRouter from "../hoc/withRouter";
import { getExactProduct } from "../query/getExactProduct";
import Images from "./Imges";
import styles from './Pdp.module.css'
import Attributes from "./Attribute";
import { compose } from "redux";
import { connect } from "react-redux";
import { addToOrder } from "../redux/reducer-body";
import {setProduct, setColor,setCapacity, setSize, setTouchingWith, setWithUSB } from "./../redux/reducer-pdp"


const Pdp = props => {
    let productId = String(props.router.params.productId)

    const { data } = useQuery(getExactProduct, {
        variables: {
            id: productId
        }
    })

    useEffect(() => {
        data && props.setProduct(data.product)
    })

    const sendToStoreProduct = () => {
        let element = {...props.product, 
            color:props.color, 
            size:props.size,
            capacity:props.capacity,
            withTouching: props.withTouching,
            withUSB:props.withUSB
        }
        console.log(element)
        props.addToOrder(element)
    }


    if (props.product && data) {
        return (
            <div className={styles.wrap}>
                <Images gallery={data.product.gallery} />

                <div className="order">

                    <div className={styles.container}><b>{props.product.name}</b></div>

                    <Attributes {...props} attributes={props.product.attributes} />
                    

                    <Price prices={props.product.prices} currentCurrency={props.currentCurrency} />


                    <button onClick={sendToStoreProduct} className={styles.btn}>ADD TO CARD</button>

                </div>
                <div>{props.product.description}</div>
            </div>
        )
    }

}

let mapStateToProps = state => {
    return {
        currentCurrency: state.body.currentCurrency,
        order: state.body.order,
        product: state.pdp.product,
        color: state.pdp.color,
        size: state.pdp.size,
        capacity: state.pdp.capacity,
        withTouching: state.pdp.withTouching,
        withUSB: state.pdp.withUSB

    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        addToOrder, setProduct, setColor,
        setCapacity, setSize, setTouchingWith,
        setWithUSB
    })
)(Pdp)