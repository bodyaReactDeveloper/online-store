import { createSlice } from "@reduxjs/toolkit"

const pdpSlice = createSlice({
    name: 'pdp',
    initialState: {
        product: null,
        color: null,
        size: null,
        capacity: null,
        withTouching: null,
        withUSB: null,
    },
    reducers: {
        setProduct(state, action) {
            state.product = action.payload
        },
        setColor(state, action) {
            state.color = action.payload
        },
        setCapacity(state, action) {
            state.capacity = action.payload
        },
        setSize(state, action) {
            state.size = action.payload
        },
        setTouchingWith(state, action) {
            state.withTouching = action.payload
        },
        setWithUSB(state, action) {
            state.withUSB = action.payload
        },
    }
})

export const { setProduct, setColor, setCapacity, setSize, setTouchingWith, setWithUSB } = pdpSlice.actions

export default pdpSlice.reducer