import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as productReducer} from "./productReducer.js/reducer";
import {reducer as authReducer} from "./AuthReducer/reducer"
import {reducer as cartReducer} from "./cartReducer.js/reducer";

const rootReducer = combineReducers({
    authReducer , 
    productReducer,
    cartReducer
})

export const store = legacy_createStore(rootReducer , applyMiddleware(thunk))