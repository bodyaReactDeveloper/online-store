import { React, useState } from "react";
import { useQuery } from "@apollo/client/react";
import getCurr from "../query/getCurrency";
import SelectCurrency from "./SelectCurrency";
import { connect } from "react-redux/es/exports";
import CartOverlay from "./CartOverlay";
import Nav from "./Nav";
import Logo from "./logo";
import styles from "./Header.module.css"
import Baket from "./basket";
import {setCurrentCurrency} from "../redux/reducer-body"

const Header = props => {

    const [state, setState] = useState(false)

    const stateActivate = () => setState(true)
    const stateDeactivate = () => setState(false)

    const { data } = useQuery(getCurr)


    const setCurrentCurrency = e => {
        let value = e.target.value
        props.setCurrentCurrency(value)
    }


    !data && <div>loading...</div>
    

    if (data) return  (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <Nav />

                <Logo/>

                <div className={styles.container_icons}>
                    <SelectCurrency data={data} setCurrentCurrency={setCurrentCurrency} />

                    <Baket state={state} stateActivate={stateActivate}
                    stateDeactivate={stateDeactivate} order={props.order}/>
                </div>


                {state && props.order.length >=1  && <CartOverlay {...props} />}
            </div>

        </header>
    )
}



let mapStateToProps = state => {
    return {
        order: state.body.order,
        currentCurrency:state.body.currentCurrency
    }
}

export default connect(mapStateToProps, {setCurrentCurrency})(Header)