import React from 'react'
import { setColor, setCapacity, setSize, setTouchingWith, setWithUSB } from "../store/pdp-slice"
import { changePoductSize, changePoductColor, changePoductCapacity, changePoductWithTouching, changePoductWithUSB } from "../store/body-slice"

const withAttribute = (Component) => {
    const ComponentProps = props => {
        let callback

        switch (props.atr.id) {
            case "Size":
                props.fromHeader ? callback = changePoductSize:
                callback = setSize
                break;
            case "Color":
                props.fromHeader ? callback = changePoductColor:
                callback = setColor
                break;
            case "Capacity":
                props.fromHeader ? callback = changePoductCapacity:
                callback = (setCapacity)
                break;
            case "Touch ID in keyboard":
                props.fromHeader ? callback = changePoductWithTouching:
                callback = (setTouchingWith)
                break;
            case "With USB 3 ports":
                props.fromHeader ? callback = changePoductWithUSB:
                callback = (setWithUSB)
                break;
            default:
                break;
        }
        return <Component {...props} callback={callback}/>
    }
    return ComponentProps
}

export default withAttribute
