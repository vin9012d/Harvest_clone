import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import { reducer as Authreducer } from "./Authreducer/reducer";



export const store=legacy_createStore(Authreducer,applyMiddleware(thunk))