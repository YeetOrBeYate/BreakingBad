import {createStore, applyMiddleware, combineReducers} from "redux"
import { multiClientMiddleware } from 'redux-axios-middleware'
import createSagaMiddleware from 'redux-saga'
import {PersonReducer} from "./Reducers/Character"
import {searchFlow} from "./Sagas/Sagas"

import clients from "./Services/api"

const sagaMiddleware = createSagaMiddleware()

const middleware = [multiClientMiddleware(clients), sagaMiddleware]


const rootReducer = combineReducers({
    Person:PersonReducer
})




export const store = createStore(rootReducer,applyMiddleware(...middleware))

sagaMiddleware.run(searchFlow)