import React from "react";
import getProduct from "../query/getProduct";
import { useQuery } from "@apollo/react-hooks";

const withCategory = (Component) => {
    const ComponentProps = (props) => {
        const { data } = useQuery(getProduct)

        const arr = []
        
        if (data) {
            data.categories[props.index].products.forEach(i => {
                arr.push(i)
            })
        }
        if (data) {
            return (
                <Component {...props} arr={arr} />
            )
        }

    }
    return ComponentProps
}

export default withCategory