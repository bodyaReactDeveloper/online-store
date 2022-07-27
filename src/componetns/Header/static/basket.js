import React from "react";
import styles from "../Header.module.css"
import icon from "../../../img/icon.png"
import { useSelector } from "react-redux";

const Baket = props => {
    const order = useSelector(state => state.body.order)
    return (
        <div className={styles.basket}>
            <img onClick={props.state ? props.stateDeactivate : props.stateActivate} src={icon} alt="oops" />
            {order.length >= 1 && <div >{order.length}</div>}
        </div>
    )


}

export default Baket