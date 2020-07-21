import {take, fork, put, call} from "redux-saga/effects"
import axios from "axios"

function search(value){

    return axios.get(`https://www.breakingbaldapi.com/api/characters?name=${value}`)

            .then(res=>res.data)


}


  function* startSearch(value){
    try {
        yield put({type:'loading'})
        const person = yield call(search, value)
        yield put({type:'success', payload:person})
    } catch (error) {
        
        yield put({type:'failure'})
    }
}



export function* searchFlow(){
    while (true){
        const {value} = yield take('searchRequest')
        
        const task = yield fork(startSearch, value)
    }
}