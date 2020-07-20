import {createStore, applyMiddleware, combineReducers} from "redux"
import createSagaMiddleware from 'redux-saga'
import {PersonReducer} from "./Reducers/Character"
import {searchFlow} from "./Sagas/Sagas"

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    Person:PersonReducer
})




export const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(searchFlow)