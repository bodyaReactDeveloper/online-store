const SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY'
const ADD_TO_ORDER = 'ADD_TO_ORDER'

let initialState = {
    currentCurrency: "USD",
    order: [

    ]
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CURRENT_CURRENCY:
            return {
                ...state,
                currentCurrency: action.curr
            }
        case ADD_TO_ORDER:
            return{
                ...state,
                order: [...state.order, action.order]
            }
        default:
            return state
    }
}

export const setCurrentCurrency = curr => ({type:SET_CURRENT_CURRENCY, curr})
export const addToOrder = order => ({type:ADD_TO_ORDER, order})



export default reducer