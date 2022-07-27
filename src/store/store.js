import { configureStore } from "@reduxjs/toolkit";
import bodySlice from "./body-slice";
import pdpSlice from "./pdp-slice";

export default configureStore({
    reducer: {
        body: bodySlice,
        pdp: pdpSlice
    }
})