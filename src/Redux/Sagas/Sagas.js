import {take, fork, put, call, takeEvery} from "redux-saga/effects"
import axios from "axios"

import {createCharacterSearch} from "../Actions/characters"

// function search(value){

//     return axios.get(`https://www.breakingbadapi.com/api/characters?name=${value}`)

//             .then(res=>res.data)


// }


//   function* startSearch(value){
//     try {
//         yield put({type:'loading'})
//         const person = yield call(search, value)
//         yield put({type:'success', payload:person})
//     } catch (error) {
        
//         yield put({type:'failure'})
//     }
// }

function* onSearchRequest(action){
    const {payload} = action
    console.log(payload, "saga-27")


    const data = yield put(createCharacterSearch(payload))
    console.log(data, "work")
    
}

function* onSearchSuccess(action){
    const {data} = action.payload
    console.log(data, "saga-36")
    yield put ({type:'success', payload:data})
}

function* onSearchFailure(action){
    const {data} = action.payload
    console.log(data, "saga-41")
}



export function* searchFlow(){
    // while (true){
    //     const {value} = yield take('searchRequest')
        
    //     const task = yield fork(startSearch, value)
    // }

    yield takeEvery("searchRequest",onSearchRequest)
    yield takeEvery("searchProcess_SUCCESS", onSearchSuccess)
    yield takeEvery("searchProcess_FAIL", onSearchFailure)


}