import React from "react";
import styles from "./Category.module.css"
import withCategory from "../../hoc/withCategory";
import CategoryContainer from "../../common/CategoryContainer";

const Tech = props => {
    return (

        <div className={styles.categories_wrap}>
            <div className={styles.category}>
                <div><b>TECH</b></div>

                <CategoryContainer arr={props.arr} />
            </div>
        </div>

    )
}

export default withCategory(Tech)