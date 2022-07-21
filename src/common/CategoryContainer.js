import React from "react";
import styles from "../Categories/Category.module.css"
import Item from "../Categories/Item";

class CategoryContainer extends React.Component {
    render() {
        return (
            <div className={styles.categories_container}>
                {this.props.arr.map((i, index) => {
                    return <Item key={index} product={i} />
                })}
            </div>
        )
    }

}

export default CategoryContainer