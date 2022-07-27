import React from "react";
import { useDispatch } from "react-redux";
import withAttribute from "../../hoc/withAttribute";
import styles from "../../css/Attribute.module.css"

const Attribute = props => {
    const dispatch = useDispatch()
    

    return (
        <>
            <div className={styles.Attribute}>
                <div><b>{props.atr.id} :</b></div>
                <div className={props.fromHeader ? styles.attribute_container_header : styles.attribute_container}>
                    {
                        props.atr.items.map((s, index) => {
                            return <div style={{background:s.value}} key={index}
                                className={s.value === props.current ? styles.active : styles.default}
                                id={props.itsColor && styles.Color}
                                onClick={() => dispatch(props.callback(s.value))}>  {!props.itsColor && s.value}
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )

}


export default withAttribute(Attribute)