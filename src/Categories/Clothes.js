import React from "react";
import CategoryContainer from "../common/CategoryContainer";
import withCategory from "../hoc/withCategory";
import styles from "./Category.module.css"

class Clothes extends React.Component {

    render() {
        return (
            <div className={styles.categories_wrap}>
                <div className={styles.category}>
                    <div>TECH</div>

                    <CategoryContainer arr={this.props.arr} />
                </div>
            </div>
        )
    }
}

export default withCategory(Clothes)