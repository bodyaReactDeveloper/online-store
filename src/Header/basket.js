import React from "react";
import styles from "./Header.module.css"
import icon from "./../img/icon.png"

class Baket extends React.PureComponent {
    render() {
        return (
            <div className={styles.basket}>
                <img onClick={this.props.tsate ? this.props.stateDeactivate : this.props.stateActivate} src={icon} alt="oops" />
                {this.props.order.length >= 1 && <div >{this.props.order.length}</div>}
            </div>
        )
    }

}

export default Baket