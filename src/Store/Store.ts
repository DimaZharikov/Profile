import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import EthernetReducer from "./Ethernet-reducer";


const reducer = combineReducers({
    EthernetSide: EthernetReducer
})


const middleware = applyMiddleware(thunkMiddleware)

export const store = createStore (reducer, composeWithDevTools(middleware))

export type AppRootStateType = ReturnType <typeof reducer>

export default store;

//@ts-ignore
window.store = store