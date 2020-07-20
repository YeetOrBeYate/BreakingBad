import React from 'react'

const Search = () => {

    const [search,setSearch] = React.useState({
        value:''
    })

    const handleChange = (e)=>{
        setSearch({...search, [e.target.name]: e.target.value})
    }

    const submit=(e)=>{
        e.preventDefault()
        console.log(search.value)
    }

    return (
        <div className="section">
            <div className="container">
                <form onSubmit={submit}>
                    <div className="field">
                        <label className="label" for="searchBar">Name</label>
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
