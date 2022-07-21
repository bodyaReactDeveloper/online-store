const SET_PRODUCT = 'SET_PRODUCT '
const SET_COLOR = 'SET_COLOR '
const SET_SIZE = 'SET_SIZE '
const SET_CAPACITY = 'SET_CAPACITY '
const SET_WITH_TOUCHING = 'SET_WITH_TOUCHING '
const SET_WITH_USB = 'SET_WITH_USB '

let inital = {
    product:null,
    color: null,
    size: null,
    capacity: null,
    withTouching: null,
    withUSB: null,
}

const pdpReducer = (state = inital, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: action.product
            }
        case SET_COLOR:
            return {
                ...state,
                color: action.color
            }
        case SET_SIZE:
            return {
                ...state,
                size: action.size
            }
        case SET_CAPACITY:
            return {
                ...state,
                capacity: action.capacity
            }
        case SET_WITH_TOUCHING:
            
            return {
                ...state,
                withTouching: action.withTouching
            }
        case SET_WITH_USB:
            return {
                ...state,
                withUSB: action.withUSB
            }
        default:
            return state
    }
}

export const setProduct = product => ({type:SET_PRODUCT, product})
export const setColor = color => ({type:SET_COLOR, color})
export const setCapacity = capacity => ({type:SET_CAPACITY, capacity})
export const setSize = size => ({type:SET_SIZE, size})
export const setTouchingWith = withTouching => ({type:SET_WITH_TOUCHING, withTouching})
export const setWithUSB = withUSB => ({type:SET_WITH_USB, withUSB})




export default pdpReducer