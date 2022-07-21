import { combineReducers } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import reducer from './reducer-body'
import pdpReducer from './reducer-pdp'


let reducers = combineReducers(
    {   
        body:reducer,
        pdp:pdpReducer
    }
)

let store = createStore(reducers)



export default store