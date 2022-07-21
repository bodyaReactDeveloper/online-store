import React, { useState } from "react";
import AttItem from "./AtrItem";
import styles from './Pdp.module.css'

const Attributes = props => {

    const [color, setColor] = useState(props.color ? props.color : "44FF03")
    const [size, setSize] = useState(props.size ? props.size : 0)
    const [withUSB, setwWthUSB] = useState(props.withUSB ? props.withUSB : 0)
    const [capacity, setCapacity] = useState(props.capacity ? props.capacity : 0)
    const [withTouching, setWithTouching] = useState(props.withTouching ? props.withTouching : 0)

    return (
        <div id={styles.size_container} className={styles.container}>
            {props.attributes.map(atr => {
                switch (atr.id) {
                    case "Size":
                        return props.fromHeader ? <Attribute key={atr.name} atr={atr} {...props} sizeST={size} callback={setSize} type={atr.id} />
                            : <Attribute key={atr.name} atr={atr} {...props} callback={props.setSize} type={atr.id} />
                    case "Color":
                        return props.fromHeader ? <Attribute key={atr.name} atr={atr} {...props} colorST={color} callback={setColor} type={atr.id} />
                            : <Attribute key={atr.name} atr={atr} {...props} callback={props.setColor} type={atr.id} />
                    case "With USB 3 ports":
                        return props.fromHeader ? <Attribute key={atr.name} atr={atr} {...props} withUSB_ST={withUSB} callback={setwWthUSB} type={atr.id} />
                            : <Attribute key={atr.name} atr={atr} {...props} callback={props.setWithUSB} type={atr.id} />



                    case "Capacity":
                        return props.fromHeader ? <Attribute key={atr.name} atr={atr} {...props} capacityST={capacity} callback={setCapacity} type={atr.id} />
                            : <Attribute key={atr.name} atr={atr} {...props} callback={props.setCapacity} type={atr.id} />
                    case "Touch ID in keyboard":
                        return props.fromHeader ? <Attribute key={atr.name} atr={atr} {...props} withTouchingST={withTouching} callback={setWithTouching} type={atr.id} />
                            : <Attribute key={atr.name} atr={atr} {...props} callback={props.setTouchingWith} type={atr.id} />


                    default:
                        return <div></div>
                }

            })}

        </div>
    )
}

class Attribute extends React.Component {
    callback = value => {
        this.props.callback(value)
    }
    render() {

        let current

        switch (this.props.type) {
            case "Size":
                this.props.fromHeader ? current = this.props.sizeST
                    : current = this.props.size || 40
                break;
            case "Color":
                this.props.fromHeader ? current = this.props.colorST
                    : current = this.props.color
                break;
            case "Capacity":
                this.props.fromHeader ? current = this.props.capacityST
                    : current = this.props.capacity || 0
                break;
            case "With USB 3 ports":
                this.props.fromHeader ? current = this.props.withUSB_ST
                    : current = this.props.withUSB || 0
                break;
            case "Touch ID in keyboard":
                this.props.fromHeader ? current = this.props.withTouchingST
                    : current = this.props.withTouching || 0
                break;
            default:
                break;
        }
        return (
            <>
                <div className={styles.Attribute}>
                    <div><b>{this.props.type} :</b></div>
                    <div className={this.props.fromHeader ? styles.attribute_container_header : styles.attribute_container}>
                        {
                            this.props.atr.items.map((s, index) => {
                                return <AttItem key={s.value}
                                    current={current} index={index}
                                    value={s.value} callback={this.callback}
                                    type={this.props.type} arr={this.props.atr.items}
                                    fromHeader={this.props.fromHeader}
                                />
                            })
                        }
                    </div>

                </div>
            </>
        )
    }
}


export default Attributes