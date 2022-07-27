import React from "react";
import styles from "../Header.module.css"
import { Link } from "react-router-dom";
import CartItemContainer from "./CartItemContainer/CartItemContainer";

const CartOverlay = () => {


    


    return (
        <>
            <div className={styles.cart_overlay_wrap}>
                <div className={styles.cart_overlay}>
                    <div>My basket</div>
                    <CartItemContainer/>
                </div>

                
                
                <div className={styles.btn_container}>
                    <Link to={"/cart_page"}><button className={styles.btn_VB}>VIEW BACK</button></Link>
                    <button className={styles.btn_CO}>CHECK OUT</button>
                </div>

            </div>


        </>
    )
}



export default CartOverlay