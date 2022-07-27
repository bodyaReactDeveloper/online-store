import React from "react";
import { Link } from "react-router-dom";
import Price from "../../common/Price";
import styles from "./Category.module.css"
import { connect } from "react-redux";

const Item = props => {
    return (
        <div className={styles.item}>

            {props.product.inStock

                ? <div>
                    <Link to={"../pdp/" + props.product.id}><img alt="" height={200} src={props.product.gallery[0]} /></Link>
                    <div><Link className={styles.Link} to={"../pdp/" + props.product.id}>{props.product.name}</Link></div>
                </div>

                : <div>
                    <div className={styles.outOfStock}>
                        <Link to={"../pdp/" + props.product.id}>
                            <img alt="" height={200} src={props.product.gallery[0]} style={{ opacity: 0.3 }} /></Link>
                        <span >OUT OF STOCK</span>
                    </div>

                    <div>{props.product.name}</div>
                </div>
            }

            {props.product.inStock && <Price prices={props.product.prices} currentCurrency={props.currentCurrency} />}

        </div>
    )


}

let mapStateToProps = state => {
    return {
        currentCurrency: state.body.currentCurrency
    }
}

export default connect(mapStateToProps)(Item)