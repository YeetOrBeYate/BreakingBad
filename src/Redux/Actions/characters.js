

export const createCharacterSearch = (string)=>({
    type:'searchProcess',
    payload:{
        request:{
            method:'get',
            url:`characters?name=${string}`
        }
    }
})