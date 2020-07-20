import {take, fork, put, call} from "redux-saga/effects"
import axios from "axios"

function* search(value){
    return new Promise(async (resolve, reject)=>{
        try {
            const res = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${value}`)
            console.log(res.data)
            resolve(res.data)
        } catch (error) {
            reject(error)
        }
    })
}


 function* startSearch(value){
    try {
        const person = yield call(search, value)
        console.log(person)
        yield put({type:'success', payload:person})
    } catch (error) {
        yield put({type:'failure'})
    }
}



export function* searchFlow(){
    while (true){
        const {value} = yield take('searchRequest')
        yield put({type:'loading'})
        const task = yield fork(startSearch, value)
    }
}