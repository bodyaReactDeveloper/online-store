import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentCurrency } from "../../../store/body-slice";

const SelectCurrency = props => {
    const dispatch = useDispatch()

    const setCurrency = e => {
        let value = e.target.value
        
        dispatch(setCurrentCurrency({value}))
    }
    return (
        <select onChange={setCurrency} className="selection">
            {props.data.currencies.map(i => <option key={i.symbol}>{i.label}</option>)}
        </select>
    )
}


export default SelectCurrency