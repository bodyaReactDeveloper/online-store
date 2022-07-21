import React from "react";

class SelectCurrency extends React.PureComponent {
    render() {
        return (
            <select onChange={this.props.setCurrentCurrency} className="selection">
                {this.props.data.currencies.map(i => <option key={i.symbol}>{i.label}</option>)}
            </select>
        )
    }

}

export default SelectCurrency