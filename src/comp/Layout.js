import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import CharacterCard from "./CharacterCard"

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
                                return <CharacterCard key={index} person={char}/>
                            }
                        })}
                    </div>
                    <div className="column">
                        {people.map((char,index)=>{

                            if(index%2 === 1){
                                return <CharacterCard key={index} person={char}/>
                            }
                            
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Layout
