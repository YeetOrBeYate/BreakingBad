
const initalState = {
    loading:false,
    success:false,
    failure:false,
    person:null
}

export const PersonReducer = (state = initalState, action)=>{
    switch(action.type){
        case 'loading':
            return {...state, loading:true, success:false,failure:false}
        case 'failure':
            return {...state, loading:false, success:false,failure:true}
        case 'success':
            return {...state, loading:false, success:true,failure:false, person:action.payload}
        default:
            return state
    }
}