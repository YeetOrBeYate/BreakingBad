import React from 'react'
import {useSelector, useDispatch} from "react-redux"

const Search = () => {

    const dispatch = useDispatch()
    const state = useSelector(state=>state)

    const [search,setSearch] = React.useState({
        value:''
    })

    const handleChange = (e)=>{
        setSearch({...search, [e.target.name]: e.target.value})
    }

    const submit=(e)=>{
        e.preventDefault()
        dispatch({type:'searchRequest', value:search.value})
    }

    return (
        <div className="section">
            <div className="container">
                <form onSubmit={submit}>
                    <div className="field">
                        <label className="label" htmlFor="searchBar">Name</label>
                        <div className="control">
                            <input 
                            className="input"
                            type="text" 
                            placeholder="ex. Walter, Gustavo, Skyler" 
                            id="searchBar" 
                            name="value" 
                            value={search.value}
                            onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-primary" onClick={submit}>Find!</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search
