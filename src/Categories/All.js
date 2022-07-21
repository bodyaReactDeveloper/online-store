import React from "react";
// import getNamesOfCategories from "../query/getCategories";
// import { Link } from "react-router-dom";
import styles from "./Category.module.css"
import Item from "./Item";
import withCategory from "../hoc/withCategory";
import CategoryContainer from "../common/CategoryContainer";

class ALL extends React.Component  {
    render(){
        return (
            <div className={styles.categories_wrap}>
                <div className={styles.category}>
                    <div>ALL</div>

                    <CategoryContainer arr={this.props.arr}/>

                </div>
            </div>
        )
    }

}

export default withCategory(ALL)