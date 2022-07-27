import { React, useState } from "react";
import { useQuery } from "@apollo/client/react";
import getCurr from "../../query/getCurrency";
import SelectCurrency from "./static/SelectCurrency";
import CartOverlay from "./CartOverlay/CartOverlay";
import Nav from "./static/Nav";
import Logo from "./static/logo";
import styles from "./Header.module.css"
import Baket from "./static/basket";
import { useSelector } from "react-redux";

const Header = () => {
    const [state, setState] = useState(false)
    const stateActivate = () => setState(true)
    const stateDeactivate = () => setState(false)

    const order = useSelector(state => state.body.order)


    const { data } = useQuery(getCurr)

    !data && <div>loading...</div>
    

    if (data) return  (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <Nav />

                <Logo/>

                <div className={styles.container_icons}>
                    <SelectCurrency data={data}/>

                    <Baket state={state} stateActivate={stateActivate}
                    stateDeactivate={stateDeactivate}/>
                </div>


                {state && order.length >=1  && <CartOverlay/>}
            </div>

        </header>
    )
}


export default Header