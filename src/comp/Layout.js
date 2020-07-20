import React from 'react'
import {useSelector, useDispatch} from "react-redux"


const Layout = () => {

    const Person = useSelector(state=>state.Person)
    let people = Person.person


    if(!Person.person){
        return(<div>no people yet!</div>)
    }

    if(Person.loading){
        return(<div>loading...</div>)
    }


    return (
        <section className="section">
            <div className="container">
                <div className="columns grid">
                    <div className="column">
                        {people.map((char,index)=>{
                            
                            if(index%2 === 0){
                                return <p>{char.name}, left, {index}</p>
                            }
                        })}
                    </div>
                    <div className="column">
                        {people.map((char,index)=>{

                            if(index%2 === 1){
                                return <p>{char.name}, right, {index}</p>
                            }
                            
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Layout
