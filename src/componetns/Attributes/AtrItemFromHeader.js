import React from "react";
import { useDispatch } from "react-redux";
import withAttribute from "../../hoc/withAttribute";
import styles from '../../css/Attribute.module.css'

const AttributeHeader = props => {
    const dispatch = useDispatch()
    const id = props.index
    return (
        <>
            <div className={styles.Attribute}>
                <div><b>{props.atr.id} :</b></div>
                <div className={styles.attribute_container_header}>
                    {
                        props.atr.items.map((s, index) => {
                            const value = s.value
                            return <div style={{background:s.value}} key={index}
                                className={s.value === props.current ? styles.active_header : styles.default_header}
                                id={props.itsColor && styles.ColorHeader}
                                onClick={() => dispatch(props.callback({value,id}))}> {!props.itsColor && s.value}
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )

}


export default withAttribute(AttributeHeader)