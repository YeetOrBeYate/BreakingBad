import axios from 'axios'

const defaultClient = axios.create({
    baseURL:`https://www.breakingbadapi.com/api/`,
    timeout:10000
})

const clients = {
    default:{
        client:defaultClient
    }
}

export default clients