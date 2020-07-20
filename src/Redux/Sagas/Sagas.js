import {take, fork, put, call} from "redux-saga/effects"
import axios from "axios"

function* search(value){
    // return new Promise(async (resolve, reject)=>{
    //     try {
    //         const res = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${value}`)
    //         console.log(res.data)
    //         resolve(res.data)
    //     } catch (error) {
    //         reject(error)
    //     }
    // })

    return axios.get(`https://www.breakingbadapi.com/api/characters?name=${value}`)

            .then(res=>res.data)

            .catch(err=>err)
}


  function* startSearch(value){
    try {
        yield put({type:'loading'})
        const person = yield call(search, value)
        console.log("SAGA",person)
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