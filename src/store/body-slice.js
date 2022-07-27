import { createSlice } from "@reduxjs/toolkit"

const bodySlice = createSlice({
    name: 'body',
    initialState: {
        currentCurrency: "USD",
        order: []
    },
    reducers: {
        setCurrentCurrency(state, action) {
            state.currentCurrency = action.payload.value
        },
        addToOrder(state, action) {
            // debugger
            state.order.push(action.payload)
        },
        changePoductSize(state, action) {
            state.order[action.payload.id].size = action.payload.value
        },
        changePoductColor(state, action) {
            state.order[action.payload.id].color = action.payload.value
        },
        changePoductCapacity(state, action) {
            state.order[action.payload.id].capacity = action.payload.value
        },
        changePoductWithTouching(state, action) {
            state.order[action.payload.id].withTouching = action.payload.value
        },
        changePoductWithUSB(state, action) {
            state.order[action.payload.id].withUSB = action.payload.value
        }
    }
})

export const { setCurrentCurrency, addToOrder, 
    changePoductSize, changePoductColor, changePoductCapacity, changePoductWithTouching, changePoductWithUSB } = bodySlice.actions

export default bodySlice.reducer