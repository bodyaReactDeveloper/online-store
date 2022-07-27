import React from "react";
import styles from "./Category.module.css"
import withCategory from "../../hoc/withCategory";
import CategoryContainer from "../../common/CategoryContainer";

const ALL = (props) => {
    return (
        <div className={styles.categories_wrap}>
            <div className={styles.category}>
                <div>ALL</div>

                <CategoryContainer arr={props.arr} />

            </div>
        </div>
    )

}

export default withCategory(ALL)