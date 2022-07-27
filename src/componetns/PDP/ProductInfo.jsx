import React from 'react'
import { useSelector } from 'react-redux'
import Price from '../../common/Price'
import Attributes from '../Attributes/Attribute'
import styles from './Pdp.module.css'

const ProductInfo = ({product, ind, sendToStoreProduct}) => {
    const currentCurrency = useSelector(state => state.body.currentCurrency)
    return (
        <div className="order">

            <div className={styles.container}><b>{product.name}</b></div>

            <Attributes attributes={product.attributes} ind={ind !== -1 && ind} />


            <Price prices={product.prices} currentCurrency={currentCurrency} />


            <button disabled={!product.inStock} onClick={sendToStoreProduct} className={styles.btn}>{ product.inStock ? "ADD TO CARD" : "OUT OF STOCK"}</button>

        </div>
    )
}

export default ProductInfo
