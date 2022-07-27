import React from "react";
import { useSelector } from "react-redux";
import styles from "../../css/Attribute.module.css"
import Attribute from './AtrItem'
import AtrItemFromHeader from "./AtrItemFromHeader";

const Attributes = ({ attributes, index, fromHeader }) => {
    const order = useSelector(state => state.body.order)

    const color = useSelector(state => state.pdp.color)
    const size = useSelector(state => state.pdp.size)
    const capacity = useSelector(state => state.pdp.capacity)
    const withTouching = useSelector(state => state.pdp.withTouching)
    const withUSB = useSelector(state => state.pdp.withUSB)

    return (
        <div className={styles.wrap}>
            {attributes.map((atr) => {
                switch (atr.id) {
                    case "Size":
                        return fromHeader ? <AtrItemFromHeader fromHeader key={atr.name} atr={atr} index={index} current={order[index].size} />
                            : <Attribute key={atr.name} atr={atr} current={size} />
                    case "Color":
                        return fromHeader ? <AtrItemFromHeader fromHeader itsColor  key={atr.name} index={index} atr={atr} current={order[index].color} />
                            : <Attribute itsColor key={atr.name} atr={atr} current={color} />
                    case "With USB 3 ports":
                        return fromHeader ? <AtrItemFromHeader fromHeader key={atr.name} atr={atr} index={index} current={order[index].withUSB}  />
                            : <Attribute key={atr.name} atr={atr} withUScurrentB_ST={withUSB}  />



                    case "Capacity":
                        return fromHeader ? <AtrItemFromHeader fromHeader key={atr.name} atr={atr} index={index} current={order[index].capacity} />
                            : <Attribute  key={atr.name} atr={atr} current={capacity} />
                    case "Touch ID in keyboard":
                        return fromHeader ? <AtrItemFromHeader fromHeader key={atr.name} atr={atr} index={index} current={order[index].withTouching}/>
                            : <Attribute  key={atr.name} atr={atr} current={withTouching} />
                    default:
                        return <div></div>
                }

            })}

        </div>
    )
}



export default Attributes