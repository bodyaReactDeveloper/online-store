import React from "react";
import styles from './Pdp.module.css'

class AttItem extends React.Component {
    render() {

        let style = { background: this.props.arr[this.props.index].value, height: 40, width: 40 }

        let classNameActiveColor = this.props.current === this.props.value && styles.activeImg

        let classNameActiveHeader = this.props.current === this.props.value && styles.active_header

        let classNameActive = this.props.current === this.props.value && styles.active

        switch (this.props.type) {
            case "Color":
                return this.props.fromHeader
                    ? <AttItemChild style={style} value={this.props.value} className={classNameActiveColor} callback={this.props.callback} />
                    : <AttItemChild style={style} value={this.props.value} className={classNameActiveColor} callback={this.props.callback} />
            case "Size":
                return this.props.fromHeader
                    ? <AttItemChild value={this.props.value} className={classNameActiveHeader} callback={this.props.callback} isNeedDisplay={true} />
                    : <AttItemChild value={this.props.value} className={classNameActive} callback={this.props.callback} isNeedDisplay={true} />
            case "Capacity":
                return this.props.fromHeader
                    ? <AttItemChild value={this.props.value} className={classNameActiveHeader} callback={this.props.callback} isNeedDisplay={true} />
                    : <AttItemChild value={this.props.value} className={classNameActive} callback={this.props.callback} isNeedDisplay={true} />
            case "With USB 3 ports":
                return this.props.fromHeader
                    ? <AttItemChild value={this.props.value} className={classNameActiveHeader} callback={this.props.callback} isNeedDisplay={true} />
                    : <AttItemChild value={this.props.value} className={classNameActive} callback={this.props.callback} isNeedDisplay={true} />
            case "Touch ID in keyboard":
                return this.props.fromHeader
                    ? <AttItemChild value={this.props.value} className={classNameActiveHeader} callback={this.props.callback} isNeedDisplay={true} />
                    : <AttItemChild value={this.props.value} className={classNameActive} callback={this.props.callback} isNeedDisplay={true} />
            default:
                return <></>
        }
    }
}

class AttItemChild extends React.Component {

    render() {
        return (
            <div style={this.props.style}
                className={this.props.className}
                onClick={() => this.props.callback(this.props.value)}> {this.props.isNeedDisplay && this.props.value}
            </div>
        )
    }

}

export default AttItem