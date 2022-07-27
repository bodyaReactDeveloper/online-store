import React from "react";
import styles from "../componetns/Categories/Category.module.css"
import Item from "../componetns/Categories/Item"

const CategoryContainer = (props) => {
    return (
        <div className={styles.categories_container}>
            {props.arr.map((i, index) => {
                return <Item key={index} product={i} />
            })}
        </div>
    )


}

export default CategoryContainer