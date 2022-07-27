import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import withRouter from "../../hoc/withRouter";
import { getExactProduct } from "../../query/getExactProduct";
import Images from "./Images/Imges"
import styles from './Pdp.module.css'
import { addToOrder } from "../../store/body-slice";
import { setProduct } from "../../store/pdp-slice"
import { useDispatch, useSelector } from "react-redux";
import ProductInfo from "./ProductInfo";


const Pdp = props => {
    const dispatch = useDispatch();

    const [ind, setInd] = useState(0);


    const product = useSelector(state => state.pdp.product);
    const color = useSelector(state => state.pdp.color);
    const size = useSelector(state => state.pdp.size);
    const capacity = useSelector(state => state.pdp.capacity);
    const withTouching = useSelector(state => state.pdp.withTouching);
    const withUSB = useSelector(state => state.pdp.withUSB);


    let productId = String(props.router.params.productId);

    const { data } = useQuery(getExactProduct, {
        variables: {
            id: productId
        }
    });


    useEffect(() => {
        data && dispatch(setProduct(data.product));
    })

    const sendToStoreProduct = () => {
        setInd(prev => prev + 1);
        let element = { ...product, color, size, capacity, withTouching, withUSB, ind };

        dispatch(addToOrder(element));

    }

    if (product && data) {
        return (
            <div className={styles.wrap}>
                <Images gallery={data.product.gallery} />

                <ProductInfo ind={ind} product={product} sendToStoreProduct={sendToStoreProduct} />

                
                <div>{product.description}</div>
            </div>
        )
    }

}


export default withRouter(Pdp)