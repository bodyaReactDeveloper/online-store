import React from "react";
import CategoryContainer from "../../common/CategoryContainer";
import withCategory from "../../hoc/withCategory";
import styles from "./Category.module.css"

const Clothes = props => {
    return (
        <div className={styles.categories_wrap}>
            <div className={styles.category}>
                <div>TECH</div>

                <CategoryContainer arr={props.arr} />
            </div>
        </div>
    )
}

export default withCategory(Clothes)
