import React from "react";
import { Link } from "react-router-dom";
import Price from "../common/Price";
import styles from "./Category.module.css"
import { connect } from "react-redux";

class Item extends React.Component {
    render() {
        return (
            <div className={styles.item}>

                {this.props.product.inStock

                    ? <div>
                        <Link to={"../pdp/" + this.props.product.id}><img height={200} src={this.props.product.gallery[0]} /></Link>
                        <div><Link className={styles.Link} to={"../pdp/" + this.props.product.id}>{this.props.product.name}</Link></div>
                    </div>

                    : <div>
                        <div className={styles.outOfStock}>
                            <Link to={"../pdp/" + this.props.product.id}><img height={200} src={this.props.product.gallery[0]} style={{ opacity: 0.3 }} /></Link>
                            {/* <img height={200} src={props.product.gallery[0]} style={{opacity:0.3}}/> */}
                            <span >OUT OF STOCK</span>
                        </div>

                        <div>{this.props.product.name}</div>
                    </div>
                }

                {this.props.product.inStock && <Price prices={this.props.product.prices} currentCurrency={this.props.currentCurrency} />}

            </div>
        )
    }

}

let mapStateToProps = state => {
    return {
        currentCurrency: state.body.currentCurrency
    }
}

export default connect(mapStateToProps)(Item)